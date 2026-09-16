
const Step = () => {
    const stepsData = [
        {
            stepNumber: 'Step 1',
            title: 'The Scouting Trip',
            bullets: [
                'Personal client dashboard access',
                'Guided pre-trip planning module',
                'Initial parameters and goals tracker',
                'Pre-briefed expert consultations setup'
            ]
        },
        {
            stepNumber: 'Step 2',
            title: 'The Guided Scouting Trip',
            bullets: [
                'Personalized 3-day itinerary',
                'Vetted 3-star hotel with breakfast',
                'Airport pickup and in-country transport',
                'One-on-one neighborhood guide session',
                'Real estate partner consultation',
                'Culture host everyday-life guidance',
                'Curated local dinner on evening two',
                'Companion mobile app for city tests',
                'Live team text support while on-site'
            ]
        },
        {
            stepNumber: 'Step 3',
            title: 'Post-Trip to Move',
            bullets: [
                'Shared workspace for notes and reflections',
                'Trusted local partner directory',
                'Practical infrastructure guidance',
                'Post-scouting operational action items',
                'Essential arrival setup checklists',
                'Ongoing referrals as you move forward'
            ]
        }
    ]

    return (
        <section id="how-it-works" className="px-6 sm:px-12 max-w-[1728px] mx-auto md:space-y-20 space-y-10">
            {/* Top Left Label */}
            <p className="font-medium text-2xl md:text-[34px] text-title text-left">
                What's Included
            </p>

            {/* Main Header */}
            <h2 className="md:text-[58px] text-4xl font-medium text-title tracking-tighter text-center">
                The 3-Step Process
            </h2>

            {/* 3 Columns Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
                {stepsData.map((col, idx) => (
                    <div key={idx} className="space-y-4 md:space-y-6">
                        <p className="font-medium text-2xl md:text-[36px] text-title text-center">
                            {col.stepNumber}
                        </p>
                        <h3 className="text-2xl md:text-[34px] text-title text-center">
                            {col.title}
                        </h3>

                        <ul className="text-xl md:text-2xl text-title space-y-4">
                            {col.bullets.map((bullet, bIdx) => (
                                <li key={bIdx} className="flex items-start gap-2.5">
                                    <span className="size-2 bg-title shrink-0 mt-3" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Step