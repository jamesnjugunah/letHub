// import { useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import {
//   ChevronLeft,
//   ChevronRight,
//   Heart,
//   Share2,
//   Star,
//   MapPin,
//   Bed,
//   Bath,
//   Maximize,
//   Users,
//   CheckCircle,
//   Shield,
//   Calendar,
//   MessageCircle,
//   Phone,
//   Wifi,
//   Car,
//   Waves,
//   Dumbbell,
//   Lock,
//   Zap,
// } from 'lucide-react';
// import { Header } from '@/components/Header';
// import { Button } from '@/components/ui/button';
// import { mockListings } from '@/data/mockListings';
// import { cn } from '@/lib/utils';

// const amenityIcons: Record<string, React.ElementType> = {
//   WiFi: Wifi,
//   Parking: Car,
//   Pool: Waves,
//   Gym: Dumbbell,
//   Security: Lock,
//   Generator: Zap,
// };

// export default function ListingDetail() {
//   const { id } = useParams();
//   const listing = mockListings.find((l) => l.id === id) || mockListings[0];
//   const [currentImage, setCurrentImage] = useState(0);
//   const [isFavorite, setIsFavorite] = useState(false);

//   const formatPrice = (price: number) => {
//     return new Intl.NumberFormat('en-KE').format(price);
//   };

//   const nextImage = () => {
//     setCurrentImage((prev) => (prev + 1) % listing.images.length);
//   };

//   const prevImage = () => {
//     setCurrentImage((prev) => (prev - 1 + listing.images.length) % listing.images.length);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* Breadcrumb */}
//       <div className="border-b border-border bg-card">
//         <div className="container py-3">
//           <nav className="flex items-center gap-2 text-sm text-muted-foreground">
//             <Link to="/" className="hover:text-foreground">
//               Home
//             </Link>
//             <span>/</span>
//             <Link to="/" className="hover:text-foreground capitalize">
//               {listing.category.replace('-', ' ')}
//             </Link>
//             <span>/</span>
//             <span className="text-foreground line-clamp-1">{listing.title}</span>
//           </nav>
//         </div>
//       </div>

//       <main className="container py-6">
//         {/* Image Gallery */}
//         <section className="relative mb-8 overflow-hidden rounded-2xl">
//           <div className="relative aspect-[16/9] md:aspect-[21/9]">
//             <img
//               src={listing.images[currentImage]}
//               alt={listing.title}
//               className="h-full w-full object-cover"
//             />

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevImage}
//               className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-lg transition-all hover:bg-card hover:scale-110"
//             >
//               <ChevronLeft className="h-5 w-5" />
//             </button>
//             <button
//               onClick={nextImage}
//               className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-card/90 p-3 shadow-lg transition-all hover:bg-card hover:scale-110"
//             >
//               <ChevronRight className="h-5 w-5" />
//             </button>

//             {/* Image Counter */}
//             <div className="absolute bottom-4 left-4 rounded-full bg-card/90 px-4 py-2 text-sm font-medium shadow-lg">
//               {currentImage + 1} / {listing.images.length}
//             </div>

//             {/* Badges */}
//             <div className="absolute left-4 top-4 flex gap-2">
//               {listing.isVerified && (
//                 <span className="verified-badge">
//                   <CheckCircle className="h-3.5 w-3.5" />
//                   Verified
//                 </span>
//               )}
//               {listing.isSuperhost && (
//                 <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-sm font-medium shadow-lg">
//                   ⭐ Superhost
//                 </span>
//               )}
//             </div>

//             {/* Action Buttons */}
//             <div className="absolute right-4 top-4 flex gap-2">
//               <button className="rounded-full bg-card/90 p-3 shadow-lg transition-all hover:bg-card hover:scale-110">
//                 <Share2 className="h-5 w-5" />
//               </button>
//               <button
//                 onClick={() => setIsFavorite(!isFavorite)}
//                 className={cn(
//                   'rounded-full p-3 shadow-lg transition-all hover:scale-110',
//                   isFavorite
//                     ? 'bg-gold text-accent-foreground'
//                     : 'bg-card/90 hover:bg-card'
//                 )}
//               >
//                 <Heart className={cn('h-5 w-5', isFavorite && 'fill-current')} />
//               </button>
//             </div>
//           </div>

//           {/* Thumbnail Strip */}
//           <div className="absolute bottom-4 right-4 flex gap-2">
//             {listing.images.map((img, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentImage(index)}
//                 className={cn(
//                   'h-16 w-24 overflow-hidden rounded-lg transition-all',
//                   index === currentImage
//                     ? 'ring-2 ring-gold ring-offset-2'
//                     : 'opacity-70 hover:opacity-100'
//                 )}
//               >
//                 <img src={img} alt="" className="h-full w-full object-cover" />
//               </button>
//             ))}
//           </div>
//         </section>

//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Header */}
//             <section>
//               <h1 className="text-3xl font-bold">{listing.title}</h1>
//               <div className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground">
//                 <div className="flex items-center gap-1">
//                   <MapPin className="h-4 w-4 text-gold" />
//                   <span>{listing.location}</span>
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <Star className="h-4 w-4 fill-gold text-gold" />
//                   <span className="font-medium text-foreground">{listing.rating}</span>
//                   <span>({listing.reviewCount} reviews)</span>
//                 </div>
//               </div>
//             </section>

//             {/* Quick Info */}
//             <section className="grid grid-cols-2 gap-4 sm:grid-cols-4">
//               {listing.bedrooms && (
//                 <div className="rounded-xl border border-border bg-card p-4 text-center">
//                   <Bed className="mx-auto h-6 w-6 text-gold" />
//                   <p className="mt-2 text-lg font-semibold">{listing.bedrooms}</p>
//                   <p className="text-sm text-muted-foreground">Bedrooms</p>
//                 </div>
//               )}
//               {listing.bathrooms && (
//                 <div className="rounded-xl border border-border bg-card p-4 text-center">
//                   <Bath className="mx-auto h-6 w-6 text-gold" />
//                   <p className="mt-2 text-lg font-semibold">{listing.bathrooms}</p>
//                   <p className="text-sm text-muted-foreground">Bathrooms</p>
//                 </div>
//               )}
//               {listing.size && (
//                 <div className="rounded-xl border border-border bg-card p-4 text-center">
//                   <Maximize className="mx-auto h-6 w-6 text-gold" />
//                   <p className="mt-2 text-lg font-semibold">{listing.size}</p>
//                   <p className="text-sm text-muted-foreground">{listing.sizeUnit}</p>
//                 </div>
//               )}
//               {listing.maxGuests && (
//                 <div className="rounded-xl border border-border bg-card p-4 text-center">
//                   <Users className="mx-auto h-6 w-6 text-gold" />
//                   <p className="mt-2 text-lg font-semibold">{listing.maxGuests}</p>
//                   <p className="text-sm text-muted-foreground">Max Guests</p>
//                 </div>
//               )}
//             </section>

//             {/* Description */}
//             <section>
//               <h2 className="mb-4 text-xl font-semibold">About this property</h2>
//               <p className="leading-relaxed text-muted-foreground">{listing.description}</p>
//             </section>

//             {/* Amenities */}
//             <section>
//               <h2 className="mb-4 text-xl font-semibold">Amenities</h2>
//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
//                 {listing.amenities.map((amenity) => {
//                   const Icon = amenityIcons[amenity] || CheckCircle;
//                   return (
//                     <div
//                       key={amenity}
//                       className="flex items-center gap-3 rounded-lg border border-border bg-card p-3"
//                     >
//                       <Icon className="h-5 w-5 text-gold" />
//                       <span className="text-sm font-medium">{amenity}</span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </section>

//             {/* Location */}
//             <section>
//               <h2 className="mb-4 text-xl font-semibold">Location</h2>
//               <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
//                 <div className="flex h-full items-center justify-center text-muted-foreground">
//                   <div className="text-center">
//                     <MapPin className="mx-auto h-12 w-12 text-gold" />
//                     <p className="mt-2 font-medium">{listing.location}</p>
//                     <p className="text-sm">Interactive map coming soon</p>
//                   </div>
//                 </div>
//               </div>
//             </section>

//             {/* Reviews */}
//             <section>
//               <div className="mb-4 flex items-center justify-between">
//                 <h2 className="text-xl font-semibold">Reviews</h2>
//                 <div className="flex items-center gap-2">
//                   <Star className="h-5 w-5 fill-gold text-gold" />
//                   <span className="text-lg font-semibold">{listing.rating}</span>
//                   <span className="text-muted-foreground">({listing.reviewCount} reviews)</span>
//                 </div>
//               </div>
//               <div className="space-y-4">
//                 {[1, 2, 3].map((i) => (
//                   <div key={i} className="rounded-xl border border-border bg-card p-4">
//                     <div className="flex items-center gap-3">
//                       <div className="h-10 w-10 rounded-full bg-gold/20" />
//                       <div>
//                         <p className="font-medium">Guest {i}</p>
//                         <p className="text-sm text-muted-foreground">December 2024</p>
//                       </div>
//                       <div className="ml-auto flex items-center gap-1">
//                         <Star className="h-4 w-4 fill-gold text-gold" />
//                         <span className="font-medium">5.0</span>
//                       </div>
//                     </div>
//                     <p className="mt-3 text-sm text-muted-foreground">
//                       Amazing property! The host was incredibly responsive and the place was exactly
//                       as described. Would definitely book again.
//                     </p>
//                   </div>
//                 ))}
//               </div>
//               <Button variant="outline" className="mt-4 w-full">
//                 Show all {listing.reviewCount} reviews
//               </Button>
//             </section>
//           </div>

//           {/* Booking Sidebar */}
//           <div className="lg:col-span-1">
//             <div className="sticky top-24 space-y-6 rounded-2xl border border-border bg-card p-6 shadow-lg">
//               {/* Price */}
//               <div className="text-center">
//                 <div className="inline-flex items-baseline gap-1 rounded-full bg-gold/10 px-4 py-2">
//                   <span className="text-3xl font-bold text-gold">
//                     KES {formatPrice(listing.price)}
//                   </span>
//                   <span className="text-muted-foreground">/{listing.priceUnit}</span>
//                 </div>
//               </div>

//               {/* Date Picker */}
//               <div className="space-y-3">
//                 <div className="grid grid-cols-2 gap-3">
//                   <div className="rounded-lg border border-border p-3">
//                     <p className="text-xs text-muted-foreground">Check-in</p>
//                     <p className="font-medium">Select date</p>
//                   </div>
//                   <div className="rounded-lg border border-border p-3">
//                     <p className="text-xs text-muted-foreground">Check-out</p>
//                     <p className="font-medium">Select date</p>
//                   </div>
//                 </div>
//                 <div className="rounded-lg border border-border p-3">
//                   <p className="text-xs text-muted-foreground">Guests</p>
//                   <p className="font-medium">1 guest</p>
//                 </div>
//               </div>

//               {/* CTA Buttons */}
//               <div className="space-y-3">
//                 <Button variant="gold" size="xl" className="w-full">
//                   <Calendar className="h-5 w-5" />
//                   Reserve Now
//                 </Button>
//                 <Button variant="outline" size="lg" className="w-full">
//                   Request to Book
//                 </Button>
//               </div>

//               <p className="text-center text-sm text-muted-foreground">
//                 You won't be charged yet
//               </p>

//               {/* Price Breakdown */}
//               <div className="space-y-2 border-t border-border pt-4">
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">
//                     KES {formatPrice(listing.price)} x 1 {listing.priceUnit}
//                   </span>
//                   <span>KES {formatPrice(listing.price)}</span>
//                 </div>
//                 <div className="flex justify-between text-sm">
//                   <span className="text-muted-foreground">Service fee</span>
//                   <span>KES {formatPrice(Math.round(listing.price * 0.05))}</span>
//                 </div>
//                 <div className="flex justify-between border-t border-border pt-2 font-semibold">
//                   <span>Total</span>
//                   <span>KES {formatPrice(Math.round(listing.price * 1.05))}</span>
//                 </div>
//               </div>

//               {/* Owner Card */}
//               <div className="border-t border-border pt-4">
//                 <div className="flex items-center gap-3">
//                   <img
//                     src={listing.ownerAvatar}
//                     alt={listing.ownerName}
//                     className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/20"
//                   />
//                   <div>
//                     <p className="font-medium">{listing.ownerName}</p>
//                     <p className="text-sm text-muted-foreground">
//                       {listing.ownerResponseRate}% response rate
//                     </p>
//                   </div>
//                 </div>
//                 <div className="mt-4 grid grid-cols-2 gap-2">
//                   <Button variant="outline" size="sm">
//                     <MessageCircle className="h-4 w-4" />
//                     Message
//                   </Button>
//                   <Button variant="outline" size="sm">
//                     <Phone className="h-4 w-4" />
//                     Call
//                   </Button>
//                 </div>
//               </div>

//               {/* Trust Badges */}
//               <div className="flex items-center justify-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
//                 <div className="flex items-center gap-1">
//                   <Shield className="h-4 w-4 text-gold" />
//                   Secure Payment
//                 </div>
//                 <div className="flex items-center gap-1">
//                   <CheckCircle className="h-4 w-4 text-gold" />
//                   Verified
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
