import PricingCard from './PricingCard'

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding">
      <div className="container-max">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Simple, transparent pricing</h2>
          <p className="mt-2 text-gray-300">Start free. Upgrade when you're ready to grow faster.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <PricingCard name="Free" price="$0" highlighted={false} features={[
            'Access to beginner lessons',
            '3 daily challenges',
            'Basic progress tracking',
          ]} />
          <PricingCard name="Pro" price="$12" highlighted={true} features={[
            'Unlimited lessons & challenges',
            'Full AI tutor access',
            'Advanced analytics & streaks',
            'Priority support',
          ]} />
          <PricingCard name="Enterprise" price="$39" highlighted={false} features={[
            'Team management',
            'Custom content & paths',
            'SAML/SSO & security',
          ]} />
        </div>
      </div>
    </section>
  )
}
