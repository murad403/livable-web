'use client'
import React from 'react'
import HeroCard from '@/components/shared/HeroCard'
import hero1 from '@/assets/hero1.png'
import hero2 from '@/assets/hero2.png'
import hero3 from '@/assets/hero3.png'
import hero4 from '@/assets/hero4.png'
import hero5 from '@/assets/hero5.png'
import hero6 from '@/assets/hero6.png'

interface HeroProps {
    onSelectCard?: (data: {
        title: string
        location: string
        image: any
        description: string
        metrics: { rank: string; title: string; subtitle: string }[]
        mapImage?: any
        neighborhoodsText?: string
    }) => void
}

const heroItems = [
    {
        id: 'lisbon-waterfront',
        title: 'Lisbon',
        subtitle: 'Tagus River Promenade',
        image: hero1,
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
        id: 'teleferico',
        title: 'Barcelona',
        subtitle: 'Montjuïc Sky Views',
        image: hero2,
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
        title: 'San Francisco',
        subtitle: 'Coast & Beaches',
        image: hero3,
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
        title: 'Seville',
        subtitle: 'Spanish Architecture',
        image: hero4,
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
        title: 'Porto',
        subtitle: 'Culinary Experiences',
        image: hero5,
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
        title: 'Cascais',
        subtitle: 'Cascais & Porto',
        image: hero6,
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

const Hero: React.FC<HeroProps> = ({ onSelectCard }) => {
    return (
        <section className="pt-4 pb-16 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* Subtitle */}
            <p className="text-2xl sm:text-3xl md:text-4xl text-title/90 font-normal max-w-4xl leading-tight tracking-tight">
                Move from the U.S. to Spain or Portugal efficiently, joyfully, and without regret.
            </p>

            {/* 6 Hero Image Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-end gap-3 sm:gap-4 min-h-90 pt-8 mb-18">
                {heroItems.map((item) => (
                    <HeroCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        subtitle={item.subtitle}
                        onClick={() => onSelectCard && onSelectCard(item)}
                    />
                ))}
            </div>

            {/* Moving abroad text row (Under Hero cards) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start pt-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-title leading-snug tracking-tight">
                    Moving abroad can turn into years of fragmented research, expensive mistakes, and second-guessing.
                </h2>
                <p className="text-base sm:text-lg text-title leading-relaxed">
                    Every detail of our scouting trip program is designed to shortcut years of guesswork into a focused three-day experience that helps you clarify your priorities and move with confidence.
                </p>
            </div>
        </section>
    )
}

export default Hero