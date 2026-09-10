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
        <main className="py-16 px-6 sm:px-12 max-w-7xl mx-auto text-title font-sans">
            {/* Header Section (Matching User Image) */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-title mb-8">
                Substack Library
            </h1>

            {/* Two-Column Intro Paragraphs (Matching User Image) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                <div className="lg:col-span-7">
                    <p className="text-base sm:text-lg text-title leading-relaxed font-normal">
                        Browse our substack library—the somatization of relocation, the theory of building human networks, and everything in between. Each article is written with the global experience in mind and draws on cross- and trans-disciplinary research. Links below.
                    </p>
                </div>

                <div className="lg:col-span-5 lg:text-right">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-title leading-tight tracking-tight max-w-md lg:ml-auto">
                        Cross-disciplinary clarity. International perspective.
                    </h2>
                </div>
            </div>

            {/* 2-Column Articles Grid (Matching User Image) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {libraryArticles.map((article) => (
                    <SubstackLibraryCard key={article.id} article={article} />
                ))}
            </div>
        </main>
    )
}