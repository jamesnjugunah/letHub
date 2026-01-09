// import { useState, useMemo } from 'react';
// import { Grid, List, Map, SlidersHorizontal } from 'lucide-react';
// import { Header } from '@/components/Header';
// import { CategoryTabs } from '@/components/CategoryTabs';
// import { FilterChips } from '@/components/FilterChips';
// import { FilterSidebar } from '@/components/FilterSidebar';
// import { ListingCard } from '@/components/ListingCard';
// import { Button } from '@/components/ui/button';
// import { mockListings } from '@/data/mockListings';
// import { cn } from '@/lib/utils';

// type ViewMode = 'grid' | 'list' | 'map';

// export default function Listings() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [activeFilters, setActiveFilters] = useState<string[]>([]);
//   const [viewMode, setViewMode] = useState<ViewMode>('grid');
//   const [showMobileFilters, setShowMobileFilters] = useState(false);

//   const handleFilterToggle = (filter: string) => {
//     setActiveFilters((prev) =>
//       prev.includes(filter)
//         ? prev.filter((f) => f !== filter)
//         : [...prev, filter]
//     );
//   };

//   const filteredListings = useMemo(() => {
//     let filtered = mockListings;
    
//     if (activeCategory) {
//       filtered = filtered.filter((listing) => listing.category === activeCategory);
//     }
    
//     if (activeFilters.includes('verified')) {
//       filtered = filtered.filter((listing) => listing.isVerified);
//     }
    
//     if (activeFilters.includes('available')) {
//       filtered = filtered.filter((listing) => listing.availableNow);
//     }
    
//     return filtered;
//   }, [activeCategory, activeFilters]);

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

//       <main className="container py-6">
//         {/* Top Bar */}
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h1 className="text-2xl font-bold">
//               {activeCategory ? (
//                 <>
//                   {mockListings.filter((l) => l.category === activeCategory)[0]?.category
//                     .charAt(0)
//                     .toUpperCase()}
//                   {mockListings
//                     .filter((l) => l.category === activeCategory)[0]
//                     ?.category.slice(1)
//                     .replace('-', ' ')}{' '}
//                   Rentals
//                 </>
//               ) : (
//                 'All Properties'
//               )}
//             </h1>
//             <p className="text-sm text-muted-foreground">
//               Showing {filteredListings.length} properties in Kenya
//             </p>
//           </div>

//           <div className="flex items-center gap-3">
//             {/* View Toggle */}
//             <div className="hidden rounded-lg border border-border bg-card p-1 sm:flex">
//               {[
//                 { mode: 'grid' as ViewMode, icon: Grid },
//                 { mode: 'list' as ViewMode, icon: List },
//                 { mode: 'map' as ViewMode, icon: Map },
//               ].map(({ mode, icon: Icon }) => (
//                 <button
//                   key={mode}
//                   onClick={() => setViewMode(mode)}
//                   className={cn(
//                     'rounded-md p-2 transition-colors',
//                     viewMode === mode
//                       ? 'bg-accent text-accent-foreground'
//                       : 'text-muted-foreground hover:text-foreground'
//                   )}
//                 >
//                   <Icon className="h-4 w-4" />
//                 </button>
//               ))}
//             </div>

//             {/* Mobile Filter Button */}
//             <Button
//               variant="outline"
//               onClick={() => setShowMobileFilters(true)}
//               className="lg:hidden"
//             >
//               <SlidersHorizontal className="h-4 w-4 mr-2" />
//               Filters
//             </Button>

//             {/* Sort Dropdown */}
//             <select className="rounded-lg border border-border bg-card px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-accent">
//               <option>Sort: Newest</option>
//               <option>Price: Low to High</option>
//               <option>Price: High to Low</option>
//               <option>Most Popular</option>
//               <option>Top Rated</option>
//             </select>
//           </div>
//         </div>

//         {/* Filter Chips */}
//         <FilterChips activeFilters={activeFilters} onFilterToggle={handleFilterToggle} />

//         {/* Main Content */}
//         <div className="mt-6 flex gap-6">
//           {/* Sidebar - Desktop */}
//           <div className="hidden lg:block">
//             <FilterSidebar />
//           </div>

//           {/* Mobile Filter Overlay */}
//           {showMobileFilters && (
//             <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden">
//               <div className="fixed right-0 top-0 h-full w-full max-w-sm overflow-y-auto bg-card p-6 shadow-lg">
//                 <FilterSidebar isOpen onClose={() => setShowMobileFilters(false)} />
//               </div>
//             </div>
//           )}

//           {/* Listings Grid */}
//           <div className="flex-1">
//             {filteredListings.length > 0 ? (
//               <div
//                 className={cn(
//                   'grid gap-6',
//                   viewMode === 'grid' &&
//                     'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3',
//                   viewMode === 'list' && 'grid-cols-1'
//                 )}
//               >
//                 {filteredListings.map((listing, index) => (
//                   <div
//                     key={listing.id}
//                     className="animate-fade-in"
//                     style={{ animationDelay: `${index * 50}ms` }}
//                   >
//                     <ListingCard listing={listing} />
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col items-center justify-center py-20 text-center">
//                 <div className="mb-4 text-6xl">🏠</div>
//                 <h3 className="mb-2 text-xl font-semibold">No properties found</h3>
//                 <p className="text-muted-foreground">
//                   Try adjusting your filters or browse popular areas
//                 </p>
//                 <Button variant="gold" className="mt-4">
//                   Clear Filters
//                 </Button>
//               </div>
//             )}

//             {/* Load More */}
//             {filteredListings.length > 0 && (
//               <div className="mt-10 flex justify-center">
//                 <Button variant="outline" size="lg">
//                   Load More Properties
//                 </Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
