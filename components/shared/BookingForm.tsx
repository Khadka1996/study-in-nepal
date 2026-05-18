'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { trackAppointmentBooked } from '@/lib/analytics'
import { sendEmail } from '@/lib/email'
import { logger } from '@/lib/logger'

const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  phone: z.string().min(7, 'Please enter a valid phone number.'),
  preferredDate: z.string().min(1, 'Please choose a date.'),
  timeSlot: z.enum(['Morning', 'Afternoon', 'Evening']),
  purpose: z.string().min(10, 'Please describe your purpose.'),
})

type BookingFormValues = z.infer<typeof bookingSchema>

interface BookingSuccessState {
  reference: string
  name: string
  preferredDate: string
  timeSlot: string
}

const timeSlotOptions: Array<BookingFormValues['timeSlot']> = ['Morning', 'Afternoon', 'Evening']

function createReference(): string {
  return `BK-${Date.now().toString(36).toUpperCase()}`
}

export default function BookingForm(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [success, setSuccess] = useState<BookingSuccessState | null>(null)
  const [errorMessage, setErrorMessage] = useState<string>('')

  const bookingDateMin = useMemo(() => new Date().toISOString().split('T')[0], [])

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      timeSlot: 'Morning',
      purpose: '',
    },
  })

  const submitBooking = async (values: BookingFormValues): Promise<void> => {
    setIsSubmitting(true)
    setErrorMessage('')

    const reference = createReference()

    try {
      await sendEmail({
        templateParams: {
          booking_reference: reference,
          name: values.name,
          email: values.email,
          phone: values.phone,
          preferred_date: values.preferredDate,
          time_slot: values.timeSlot,
          purpose: values.purpose,
          form_type: 'booking',
        },
      })

      setSuccess({
        reference,
        name: values.name,
        preferredDate: values.preferredDate,
        timeSlot: values.timeSlot,
      })
      reset()
      trackAppointmentBooked()
    } catch (error: unknown) {
      logger.error('Booking form submission failed', error)
      setErrorMessage('Something went wrong. Please try booking again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="rounded-[2rem] border border-[var(--color-light)] bg-white p-8 shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">Booking confirmed</p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-dark)]">Your consultation request is in the queue.</h2>
        <p className="mt-4 text-sm leading-6 text-slate-600">
          Reference {success.reference}. We will confirm your slot and reply with next steps within 24 hours.
        </p>
        <div className="mt-6 rounded-3xl bg-[var(--color-light)] p-5 text-sm text-[var(--color-dark)]">
          <p><span className="font-semibold">Name:</span> {success.name}</p>
          <p><span className="font-semibold">Preferred date:</span> {success.preferredDate}</p>
          <p><span className="font-semibold">Time slot:</span> {success.timeSlot}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-5">
      {errorMessage ? <div className="rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">{errorMessage}</div> : null}

      <form className="grid gap-5" onSubmit={handleSubmit(submitBooking)}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="booking-name" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Name
            </label>
            <input id="booking-name" {...register('name')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.name ? <p className="mt-2 text-xs text-rose-600">{errors.name.message}</p> : null}
          </div>

          <div>
            <label htmlFor="booking-email" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Email
            </label>
            <input id="booking-email" type="email" {...register('email')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.email ? <p className="mt-2 text-xs text-rose-600">{errors.email.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="booking-phone" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Phone
            </label>
            <input id="booking-phone" {...register('phone')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.phone ? <p className="mt-2 text-xs text-rose-600">{errors.phone.message}</p> : null}
          </div>

          <div>
            <label htmlFor="booking-preferred-date" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Preferred Date
            </label>
            <input id="booking-preferred-date" type="date" min={bookingDateMin} {...register('preferredDate')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.preferredDate ? <p className="mt-2 text-xs text-rose-600">{errors.preferredDate.message}</p> : null}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="booking-time-slot" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Time Slot
            </label>
            <select id="booking-time-slot" {...register('timeSlot')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring">
              {timeSlotOptions.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            {errors.timeSlot ? <p className="mt-2 text-xs text-rose-600">{errors.timeSlot.message}</p> : null}
          </div>

          <div>
            <label htmlFor="booking-purpose" className="mb-2 block text-sm font-medium text-[var(--color-dark)]">
              Purpose
            </label>
            <textarea id="booking-purpose" rows={4} {...register('purpose')} className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm focus-ring" />
            {errors.purpose ? <p className="mt-2 text-xs text-rose-600">{errors.purpose.message}</p> : null}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--color-dark)] disabled:cursor-not-allowed disabled:opacity-70 focus-ring"
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              Booking...
            </span>
          ) : (
            'Request booking'
          )}
        </button>
      </form>
    </div>
  )
}
