'use client'
import SubstackLibraryCard, { ArticleItem } from '@/components/shared/SubstackLibraryCard'

export const libraryArticles: ArticleItem[] = [
    {
        id: 'why-you-dont-need-to-make-friends',
        title: "Why you don't need to make friends",
        subtitle: 'The psychology of weak ties.',
        description:
            "We've been told our whole lives that deep friendships are the cornerstone of a meaningful life. But research in social psychology increasingly points to a different truth: the casual acquaintances we barely think about — the barista who knows your order, the neighbor you wave to — form a connective tissue that shapes our wellbeing as profoundly as our closest bonds. This essay examines why we should stop optimizing for intimacy and start cultivating the art of the peripheral.",
        fullContent: `
            We've been told our whole lives that deep friendships are the cornerstone of a meaningful life. But research in social psychology increasingly points to a different truth: the casual acquaintances we barely think about — the barista who knows your order, the neighbor you wave to — form a connective tissue that shapes our wellbeing as profoundly as our closest bonds. This essay examines why we should stop optimizing for intimacy and start cultivating the art of the peripheral.

            When moving abroad, people often worry about leaving their lifelong inner circle behind. However, empirical studies show that the immediate sense of belonging in a new city comes primarily from low-stakes, ambient social interactions.

            By embedding yourself into neighborhood routines—visiting the same café at 9:00 AM, walking along the same river promenade, greeting shopkeepers in their local language—you construct a rich network of 'weak ties' that grounds you faster than trying to force deep new friendships overnight.
        `
    },
    {
        id: 'the-somatization-of-relocation',
        title: 'The somatization of relocation',
        subtitle: 'How physical bodies process cross-border movement.',
        description:
            'Moving to a new continent isn\'t just a mental shift; it manifests in nervous system regulation, sleep cycles, and physical environment adaptation. Understanding how the human body reacts to geographic transplantation allows relocators to navigate early transitions with patience and bodily awareness.',
        fullContent: `
            Moving to a new continent isn't just a mental shift; it manifests in nervous system regulation, sleep cycles, and physical environment adaptation. Understanding how the human body reacts to geographic transplantation allows relocators to navigate early transitions with patience and bodily awareness.

            The human nervous system relies heavily on environmental predictability. When every sensory input—from street sounds and ambient lighting to grocery aisle layouts—changes simultaneously, the body experiences low-grade chronic vigilance.

            Acknowledging this physical adjustment is key to a joyful transition. Rest, routine physical activity, and structured scouting trips reduce sensory shock and allow your body to feel truly at home in Spain or Portugal.
        `
    },
    {
        id: 'building-informal-social-infrastructure',
        title: 'Building informal social infrastructure',
        subtitle: 'Micro-routines and neighborhood belonging.',
        description:
            'True integration doesn\'t happen through expat meetups or official networking groups. It happens through daily micro-routines in neighborhood third places—the morning bakery, the local park bench, the corner market. Here is how to map and construct your personal micro-social blueprint.',
        fullContent: `
            True integration doesn't happen through expat meetups or official networking groups. It happens through daily micro-routines in neighborhood third places—the morning bakery, the local park bench, the corner market. Here is how to map and construct your personal micro-social blueprint.

            Our relocation system emphasizes finding your 'anchor spots' during your 3-day scouting trip. Identifying where you will buy fresh bread, where you will read on Sunday mornings, and where locals gather creates an immediate sense of geographic familiarity.
        `
    },
    {
        id: 'the-geography-of-psychological-safety',
        title: 'The geography of psychological safety',
        subtitle: 'Evaluating cities beyond cost of living metrics.',
        description:
            'Traditional expat rankings focus heavily on tax rates and weather. But long-term satisfaction depends on walkability, ambient noise, public safety, and civic trust. We break down the trans-disciplinary framework for measuring true city livability.',
        fullContent: `
            Traditional expat rankings focus heavily on tax rates and weather. But long-term satisfaction depends on walkability, ambient noise, public safety, and civic trust. We break down the trans-disciplinary framework for measuring true city livability.

            Cities like Lisbon, Porto, Málaga, and San Sebastián rank consistently high in global safety and pedestrian-first urban design. By evaluating cities through human-scale infrastructure rather than mere financial metrics, you ensure a location fits your actual daily life.
        `
    }
]

export default function SubstackLibraryPage() {
    return (
        <main className="px-6 sm:px-12 max-w-[1728px] mx-auto text-title scroll-mt-32 mt-10 space-y-10 md:space-y-20">
            {/* Header Section (Matching User Image) */}
            <div className='space-y-4 md:space-y-8 flex items-center gap-13.5'>
                <div className='space-y-4 md:space-y-8'>
                    <h1 className="md:text-[86px] text-6xl font-medium text-title">
                        Substack Library
                    </h1>
                    <p className="text-xl md:text-[22px] text-title leading-relaxed font-normal">
                        Browse our substack library—the somatization of relocation, the theory of building human networks, and everything in between. Each article is written with the global experience in mind and draws on cross- and trans-disciplinary research. Links below.
                    </p>
                </div>
                <div className="">
                    <h2 className='md:text-[58px] text-4xl font-medium text-title tracking-tighter text-center whitespace-nowrap'>Cross-disciplinary clarity.</h2>
                    <h2 className='md:text-[58px] text-4xl font-medium text-title tracking-tighter text-center whitespace-nowrap'>International perspective.</h2>
                </div>

            </div>
            {/* 2-Column Articles Grid (Matching User Image) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {libraryArticles.map((article) => (
                    <SubstackLibraryCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    )
}