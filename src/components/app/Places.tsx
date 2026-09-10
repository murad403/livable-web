'use client'

import React from 'react'
import PlacesCard from '@/components/shared/PlacesCard'

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
        id: 'lisbon',
        badge: 'Popular',
        title: 'LISBON',
        locationText: 'West Lisbon • Oeiras • Cascais',
        image: place1,
        mapImage: mapImg,
        description:
            'Miradouros, markets, azulejos, the Tagus, neighborhood cafés, and late golden light—discover the blend of beauty, movement, and daily ease that makes Lisbon feel so magnetic.',
        metrics: [
            { rank: '#1', title: 'Healthy Urban Design', subtitle: 'ISGlobal Healthy Urban Design Index' },
            { rank: '#3', title: 'Most Livable City for Foreigners', subtitle: 'AMPS Lisbon Livable Cities Conference' },
            { rank: '#8', title: 'Friendliest Globally', subtitle: 'Time Out Resident Survey' }
        ],
        neighborhoodsText:
            'Historic Lisbon: Alfama, Baixa, Chiado River + West: Santos, Alcântara, Belém Livable Periphery: Cascais, Oeiras, Almada'
    },
    {
        id: 'porto',
        badge: 'New',
        title: 'PORTO',
        locationText: 'Douro Valley • Foz do Douro • Cedofeita',
        image: place2,
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
        id: 'san-sebastian',
        badge: '10% off',
        title: 'SAN SEBASTIÁN',
        locationText: 'Basque Country • La Concha • Gros',
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
        badge: 'Popular',
        title: 'MÁLAGA',
        locationText: 'Costa del Sol • Soho • Pedregalejo',
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
        badge: 'Trending',
        title: 'VALENCIA',
        locationText: 'Turia Gardens • Ruzafa • El Carmen',
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
        badge: 'Capital Hub',
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
    return (
        <section className="py-16 px-6 sm:px-12 max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
                <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-widest block mb-3">
                    Our Locations
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#282828] tracking-tight mb-4 max-w-4xl mx-auto">
                    We currently run scouting trips in six locations across Spain and Portugal.
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
                    Explore locations that match your vision—from vibrant cities to relaxed coastal regions. Select a location to see full details, neighborhood guides, and scouting trip agendas.
                </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {placesList.slice(0, 4).map((place) => (
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