'use client'
import React, { useRef } from 'react'
import PlacesCard from '@/components/shared/PlacesCard'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import place1 from '@/assets/place1.jpg'
import place2 from '@/assets/place2.png'
import place3 from '@/assets/place3.jpg'
import place4 from '@/assets/place4.png'
import hero4 from '@/assets/hero4.png'
import hero3 from '@/assets/hero3.png'
import mapImg from '@/assets/map.png'

interface PlacesProps {
    onSelectLocation?: (locationData: any) => void
}

export const placesList = [
    {
        id: 'porto',
        badge: 'More →',
        title: 'PORTO',
        locationText: 'West Lisbon • Oeiras • Cascais',
        image: place1,
        mapImage: mapImg,
        description:
            'Granite bridges, historic wine cellars along the Douro, dynamic creative hubs, coastal bike paths, and warm northern Portuguese hospitality.',
        metrics: [
            { rank: '#1', title: 'European Culinary Hotspot', subtitle: 'World Travel Awards' },
            { rank: '#4', title: 'Top Quality of Life', subtitle: 'Expat Insider City Index' },
            { rank: '#5', title: 'Walkability & Transit', subtitle: 'Urban Mobility Index' }
        ],
        neighborhoodsText:
            'Ribeira, Baixa, Cedofeita, Bonfim, Foz do Douro, Vila Nova de Gaia, Matosinhos Coast'
    },
    {
        id: 'barcelona',
        badge: 'More →',
        title: 'BARCELONA',
        locationText: 'Creative Coast • Hillside Enclaves • City Adjacent',
        image: place2,
        mapImage: mapImg,
        description:
            'Gothic Architecture, Mediterranean beaches, creative hubs, world-class gastronomy, and vibrant city lifestyle.',
        metrics: [
            { rank: '#1', title: 'Top Cultural Hub', subtitle: 'Global Cities' },
            { rank: '#2', title: 'Quality of Transport', subtitle: 'EU Transit' },
            { rank: '#5', title: 'Innovation Capital', subtitle: 'Smart City Index' }
        ],
        neighborhoodsText:
            'Gràcia, Eixample, El Born, Poblenou, Sarrià-Sant Gervasi'
    },
    {
        id: 'san-sebastian',
        badge: 'More →',
        title: 'SAN SEBASTIÁN',
        locationText: 'Historic Center • Concha Bay • Basque Coast',
        image: place3,
        mapImage: mapImg,
        description:
            'World-leading Michelin gastronomy, crescent-shaped La Concha bay, surf culture in Gros, and lush Basque mountain scenery.',
        metrics: [
            { rank: '#1', title: 'Gastronomic Capital', subtitle: 'Global Culinary Survey' },
            { rank: '#2', title: 'Safest City in Europe', subtitle: 'EU Safety Index' },
            { rank: '#6', title: 'Best Urban Beach', subtitle: 'Coastal Living Index' }
        ],
        neighborhoodsText:
            'Parte Vieja, Centro, Gros, Antiguo, Aiete, Eguía, Igeldo'
    },
    {
        id: 'malaga',
        badge: 'More →',
        title: 'MÁLAGA',
        locationText: 'West Lisbon • Oeiras • Cascais',
        image: place4,
        mapImage: mapImg,
        description:
            'Over 300 days of annual sunshine, a booming technology and startup hub, Picasso museums, and laid-back Mediterranean seaside dining.',
        metrics: [
            { rank: '#1', title: 'Best Expat City Worldwide', subtitle: 'InterNations City Ranking' },
            { rank: '#1', title: 'Climate & Outdoor Living', subtitle: 'European Sunshine Index' },
            { rank: '#4', title: 'Work-Life Balance', subtitle: 'Global Expat Index' }
        ],
        neighborhoodsText:
            'Centro Histórico, Soho, Malagueta, Pedregalejo, El Limonar, Teatinos'
    },
    {
        id: 'valencia',
        badge: 'More →',
        title: 'VALENCIA',
        locationText: 'Turia Gardens • El Carmen • Ruzafa',
        image: hero4,
        mapImage: mapImg,
        description:
            'Vast green parks, futuristic City of Arts and Sciences, Mediterranean beaches, authentic paella, and high-speed rail access across Europe.',
        metrics: [
            { rank: '#1', title: 'World Design Capital', subtitle: 'WDC Global Ranking' },
            { rank: '#2', title: 'Healthiest City', subtitle: 'Money.co.uk Study' },
            { rank: '#3', title: 'Expat Ease of Settling In', subtitle: 'Expat City Survey' }
        ],
        neighborhoodsText:
            'Ruzafa, El Carmen, Ciutat Vella, Benimaclet, El Cabanyal, Alboraya'
    },
    {
        id: 'madrid',
        badge: 'More →',
        title: 'MADRID',
        locationText: 'Salamanca • Chamberí • Malasaña',
        image: hero3,
        mapImage: mapImg,
        description:
            'World-class art museums, vibrant nightlife, lush Retiro Park, regal boulevards, and unbeatable international airport connections.',
        metrics: [
            { rank: '#2', title: 'Best European Capital', subtitle: 'City Brands Index' },
            { rank: '#3', title: 'Public Transport System', subtitle: 'Transit Global Index' },
            { rank: '#5', title: 'International Education', subtitle: 'Global Schools Index' }
        ],
        neighborhoodsText:
            'Salamanca, Chamberí, Malasaña, Chueca, Retiro, La Latina, Conde Duque'
    }
]

const Places: React.FC<PlacesProps> = ({ onSelectLocation }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
        }
    }

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
        }
    }

    return (
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* 1. Top Section Label: Left-aligned (Matching User Image) */}
            <span className="text-xs sm:text-sm font-semibold text-start text-title uppercase tracking-widest block mb-3">
                The Places
            </span>

            {/* 2. Centered Headline & Paragraph (Matching User Image) */}
            <div className="text-center max-w-4xl mx-auto mb-10">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-title tracking-tight mb-4 max-w-4xl mx-auto">
                    We currently run scouting trips in six locations across Spain and Portugal.
                </h2>
                <p className="text-title max-w-5xl mx-auto text-base sm:text-lg leading-relaxed">
                    Our trips encompass the broader regional system—the city center, but also connected rail towns and coastal neighborhoods—to evaluate each area for livability, social infrastructure, and lifestyle fit.
                </p>
            </div>

            {/* 3. Arrow buttons above the cards on the right side (Matching User Image) */}
            <div className="flex justify-end items-center gap-3 mb-4">
                <button
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    className="p-1 text-title hover:text-primary transition-colors cursor-pointer"
                >
                    <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    className="p-1 text-title hover:text-primary transition-colors cursor-pointer"
                >
                    <ArrowRight className="w-5 h-5" />
                </button>
            </div>

            {/* 4. Scrollable Cards Carousel */}
            <div
                ref={scrollContainerRef}
                className="flex items-center gap-6 overflow-x-auto scrollbar-none pb-6 scroll-smooth snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {placesList.map((place) => (
                    <PlacesCard
                        key={place.id}
                        badge={place.badge}
                        title={place.title}
                        locationText={place.locationText}
                        image={place.image}
                        onClick={() => onSelectLocation && onSelectLocation(place)}
                    />
                ))}
            </div>
        </section>
    )
}

export default Places