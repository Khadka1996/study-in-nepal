import TestimonialCard from '@/components/shared/TestimonialCard'
import { testimonials } from '@/lib/data/testimonials'

export default function TestimonialsCarousel(): JSX.Element {
  return (
    <section className="space-y-8">
      <div className="grid gap-6 md:hidden">
        {testimonials.map((testimonial) => (
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

      <div className="hidden overflow-hidden md:block">
        <div className="flex w-[200%] gap-6 animate-marquee">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
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
