'use client'
import React from 'react'
import HeroCard from '@/components/shared/HeroCard'
import hero1 from '@/assets/hero1.png'
import hero2 from '@/assets/hero2.png'
import hero3 from '@/assets/hero3.png'
import hero4 from '@/assets/hero4.png'
import hero5 from '@/assets/hero5.png'
import hero6 from '@/assets/hero6.png'



const heroItems = [
    {
        id: 'porto',
        title: 'Porto',
        subtitle: 'Tagus River Promenade',
        image: hero6,
        location: 'Lisbon • Waterfront',
        description: 'Enjoy sweeping views across the Tagus River, historic piers, and warm Mediterranean sunsets.',
        metrics: [
            { rank: '#1', title: 'Healthy Urban Design', subtitle: 'ISGlobal Index' },
            { rank: '#3', title: 'Most Livable City', subtitle: 'AMPS Survey' },
            { rank: '#8', title: 'Friendliest Globally', subtitle: 'Time Out Index' }
        ],
        neighborhoodsText: 'Historic Lisbon: Alfama, Baixa, Chiado River + West: Santos, Alcântara, Belém'
    },
    {
        id: 'barcelona',
        title: 'Barcelona',
        subtitle: 'Montjuïc Sky Views',
        image: hero5,
        location: 'Barcelona • Skyway',
        description: 'Panoramic mountain and coastal views connecting the Mediterranean coastline to urban green hills.',
        metrics: [
            { rank: '#1', title: 'Top Cultural Hub', subtitle: 'Global Cities' },
            { rank: '#2', title: 'Quality of Transport', subtitle: 'EU Transit' },
            { rank: '#5', title: 'Innovation Capital', subtitle: 'Smart City Index' }
        ],
        neighborhoodsText: 'Gràcia, Eixample, El Born, Poblenou, Sarrià-Sant Gervasi'
    },
    {
        id: 'san-francisco',
        title: 'San Sebastián',
        subtitle: 'Coast & Beaches',
        image: hero4,
        location: 'Coastal Beaches',
        description: 'Iconic yellow tramways winding through steep cobblestone avenues and sun-drenched squares.',
        metrics: [
            { rank: '#1', title: 'Historic Charm', subtitle: 'Travel + Leisure' },
            { rank: '#3', title: 'Expat Satisfaction', subtitle: 'InterNations' },
            { rank: '#4', title: 'Walkability Rating', subtitle: 'Pedestrian Index' }
        ],
        neighborhoodsText: 'Alfama, Graça, Mouraria, Chiado, Bairro Alto'
    },
    {
        id: 'seville-madrid',
        title: 'Valencia',
        subtitle: 'Spanish Architecture',
        image: hero2,
        location: 'Seville & Madrid',
        description: 'Terracotta roofs, majestic church spires, and vibrant plazas nestled in centuries of rich culture.',
        metrics: [
            { rank: '#2', title: 'Sunniest Capital', subtitle: 'EU Weather' },
            { rank: '#4', title: 'Life Expectancy', subtitle: 'OECD Health' },
            { rank: '#6', title: 'Vibrant Gastronomy', subtitle: 'Michelin Guide' }
        ],
        neighborhoodsText: 'Santa Cruz, Triana, Macarena, Alfalfa'
    },
    {
        id: 'tapas-dining',
        title: 'Málaga',
        subtitle: 'Culinary Experiences',
        image: hero3,
        location: 'Spain & Portugal',
        description: 'Fresh seafood, local wines, tapas, and vibrant neighborhood outdoor dining culture.',
        metrics: [
            { rank: '#1', title: 'Culinary Excellence', subtitle: 'Food & Wine' },
            { rank: '#2', title: 'Social Community', subtitle: 'Global Lifestyle' },
            { rank: '#5', title: 'Affordability', subtitle: 'Cost of Living' }
        ],
        neighborhoodsText: 'Local fresh markets, tapas bars, sea view terraces, chiringuitos'
    },
    {
        id: 'cascais-terrace',
        title: 'Lisbon',
        subtitle: 'Cascais & Porto',
        image: hero1,
        location: 'Cascais • Atlantic Coast',
        description: 'Cliffside vistas, golden beaches, ocean breezes, and peaceful residential havens.',
        metrics: [
            { rank: '#1', title: 'Coastal Livability', subtitle: 'Ocean Index' },
            { rank: '#2', title: 'Safety Rating', subtitle: 'Global Peace' },
            { rank: '#3', title: 'Air Quality', subtitle: 'Eco Metrics' }
        ],
        neighborhoodsText: 'Estoril, Cascais Villa, Quinta da Marinha, Guincho'
    }
]

const Hero: React.FC = () => {
    return (
        <section className="px-4 sm:px-8 md:px-12 max-w-[1728px] mx-auto space-y-10 sm:space-y-16 md:space-y-28">
            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] xl:text-[62px] text-title font-normal max-w-5xl leading-tight tracking-tight">
                Move from the U.S. to Spain or Portugal efficiently, joyfully, and without regret.
            </p>

            {/* 6 Hero Image Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-end gap-3 md:gap-4 min-h-64 sm:min-h-80">
                {heroItems.map((item) => (
                    <HeroCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>

            {/* Moving abroad text row (Under Hero cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 sm:gap-8 justify-between">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[58px] font-medium text-title tracking-[0.5px] sm:tracking-[1px] leading-snug lg:leading-[150%]">
                    Moving abroad can turn into years of fragmented research, expensive false starts, and second-guessing.
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-[30px] xl:text-[36px] text-title tracking-[0.5px] sm:tracking-[1px] leading-relaxed lg:leading-[150%]">
                    Livable™ is the first guided moving system designed to accelerate your move abroad—combining a personalized, expert-led scouting trip with a structured post-trip framework to get you smoothly to your final landing.
                </p>
            </div>
        </section>
    )
}

export default Hero