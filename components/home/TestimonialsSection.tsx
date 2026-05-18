import TestimonialCard from '@/components/shared/TestimonialCard'
import { homeTestimonials } from '@/lib/data/home'

export default function TestimonialsSection(): JSX.Element {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">Student voices</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--color-dark)]">Real stories, presented with the same care as the guidance.</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:hidden">
        {homeTestimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            name={testimonial.name}
            countryFlag={testimonial.countryFlag}
            university={testimonial.university}
            quote={testimonial.quote}
            imageSrc={testimonial.imageSrc}
            imageAlt={`${testimonial.name} from ${testimonial.university}`}
            shareUrl="https://studyinnepal.com/testimonials"
          />
        ))}
      </div>

      <div className="mt-8 hidden overflow-hidden md:block">
        <div className="flex w-[200%] gap-6 animate-marquee">
          {[...homeTestimonials, ...homeTestimonials].map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="w-[calc(33.333%-1rem)] shrink-0">
              <TestimonialCard
                name={testimonial.name}
                countryFlag={testimonial.countryFlag}
                university={testimonial.university}
                quote={testimonial.quote}
                imageSrc={testimonial.imageSrc}
                imageAlt={`${testimonial.name} from ${testimonial.university}`}
                shareUrl="https://studyinnepal.com/testimonials"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
