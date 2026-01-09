// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import {
//   Home,
//   Car,
//   Building2,
//   TreePine,
//   Users,
//   Plus,
//   ChevronRight,
//   ChevronLeft,
//   Upload,
//   X,
//   GripVertical,
//   Sparkles,
//   Check,
// } from 'lucide-react';
// import { Header } from '@/components/Header';
// import { StepIndicator } from '@/components/StepIndicator';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Slider } from '@/components/ui/slider';
// import { cn } from '@/lib/utils';

// const steps = [
//   { id: 1, label: 'Category' },
//   { id: 2, label: 'Details' },
//   { id: 3, label: 'Location' },
//   { id: 4, label: 'Pricing' },
//   { id: 5, label: 'Photos' },
//   { id: 6, label: 'Review' },
// ];

// const categories = [
//   { id: 'housing', label: 'Housing', icon: Home, description: 'Apartments, houses, villas...' },
//   { id: 'vehicles', label: 'Vehicles', icon: Car, description: 'Cars, SUVs, motorcycles...' },
//   { id: 'short-stays', label: 'Short Stays', icon: Building2, description: 'Hotels, Airbnbs, vacation rentals...' },
//   { id: 'land', label: 'Land', icon: TreePine, description: 'Agricultural, commercial, residential...' },
//   { id: 'conference', label: 'Conference', icon: Users, description: 'Meeting rooms, event spaces...' },
//   { id: 'other', label: 'Other', icon: Plus, description: 'Equipment, storage, other...' },
// ];

// const amenities = [
//   { id: 'wifi', label: 'WiFi', category: 'essentials' },
//   { id: 'parking', label: 'Parking', category: 'essentials' },
//   { id: 'kitchen', label: 'Kitchen', category: 'essentials' },
//   { id: 'ac', label: 'Air Conditioning', category: 'essentials' },
//   { id: 'pool', label: 'Swimming Pool', category: 'features' },
//   { id: 'gym', label: 'Gym', category: 'features' },
//   { id: 'garden', label: 'Garden', category: 'features' },
//   { id: 'balcony', label: 'Balcony', category: 'features' },
//   { id: 'security', label: '24/7 Security', category: 'safety' },
//   { id: 'cctv', label: 'CCTV', category: 'safety' },
//   { id: 'fire-ext', label: 'Fire Extinguisher', category: 'safety' },
//   { id: 'generator', label: 'Backup Generator', category: 'safety' },
// ];

// export default function CreateListing() {
//   const navigate = useNavigate();
//   const [currentStep, setCurrentStep] = useState(1);
//   const [formData, setFormData] = useState({
//     category: '',
//     title: '',
//     description: '',
//     propertyType: '',
//     bedrooms: 1,
//     bathrooms: 1,
//     size: '',
//     amenities: [] as string[],
//     location: '',
//     price: '',
//     priceUnit: 'month',
//     images: [] as string[],
//   });

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 6));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

//   const selectCategory = (categoryId: string) => {
//     setFormData({ ...formData, category: categoryId });
//   };

//   const toggleAmenity = (amenityId: string) => {
//     setFormData((prev) => ({
//       ...prev,
//       amenities: prev.amenities.includes(amenityId)
//         ? prev.amenities.filter((a) => a !== amenityId)
//         : [...prev.amenities, amenityId],
//     }));
//   };

//   const formatPrice = (price: string) => {
//     const num = parseInt(price.replace(/,/g, ''));
//     if (isNaN(num)) return '';
//     return new Intl.NumberFormat('en-KE').format(num);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       <main className="container max-w-4xl py-8">
//         {/* Step Indicator */}
//         <StepIndicator steps={steps} currentStep={currentStep} />

//         {/* Step Content */}
//         <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
//           {/* Step 1: Category */}
//           {currentStep === 1 && (
//             <div className="animate-fade-in">
//               <div className="mb-8 text-center">
//                 <h2 className="text-2xl font-bold">What are you listing?</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Select the category that best describes your property
//                 </p>
//               </div>

//               <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//                 {categories.map((category) => {
//                   const Icon = category.icon;
//                   const isSelected = formData.category === category.id;
//                   return (
//                     <button
//                       key={category.id}
//                       onClick={() => selectCategory(category.id)}
//                       className={cn(
//                         'flex flex-col items-center gap-3 rounded-xl border-2 p-6 text-center transition-all hover:-translate-y-1',
//                         isSelected
//                           ? 'border-gold bg-gold/5 shadow-gold'
//                           : 'border-border hover:border-gold/50'
//                       )}
//                     >
//                       <div
//                         className={cn(
//                           'rounded-full p-4 transition-colors',
//                           isSelected ? 'bg-gold text-accent-foreground' : 'bg-muted'
//                         )}
//                       >
//                         <Icon className="h-8 w-8" />
//                       </div>
//                       <div>
//                         <p className="font-semibold">{category.label}</p>
//                         <p className="mt-1 text-sm text-muted-foreground">
//                           {category.description}
//                         </p>
//                       </div>
//                     </button>
//                   );
//                 })}
//               </div>
//             </div>
//           )}

//           {/* Step 2: Details */}
//           {currentStep === 2 && (
//             <div className="animate-fade-in space-y-8">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Property Details</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Tell us more about your property
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Title */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium">
//                     Property Title
//                     <span className="ml-1 text-muted-foreground">
//                       ({formData.title.length}/60)
//                     </span>
//                   </label>
//                   <Input
//                     value={formData.title}
//                     onChange={(e) =>
//                       setFormData({ ...formData, title: e.target.value.slice(0, 60) })
//                     }
//                     placeholder="e.g., Modern 3BR Apartment with City Views"
//                     className="input-golden"
//                   />
//                 </div>

//                 {/* Description */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium">Description</label>
//                   <Textarea
//                     value={formData.description}
//                     onChange={(e) =>
//                       setFormData({ ...formData, description: e.target.value })
//                     }
//                     placeholder="Describe what makes your property special..."
//                     rows={5}
//                     className="input-golden"
//                   />
//                   <p className="mt-1 text-xs text-muted-foreground">
//                     💡 Great descriptions include unique features, nearby amenities, and what guests will love
//                   </p>
//                 </div>

//                 {/* Specifications */}
//                 <div className="grid gap-6 sm:grid-cols-3">
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">Bedrooms</label>
//                     <div className="flex items-center gap-3">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           setFormData({ ...formData, bedrooms: Math.max(0, formData.bedrooms - 1) })
//                         }
//                       >
//                         -
//                       </Button>
//                       <span className="w-8 text-center text-lg font-semibold">
//                         {formData.bedrooms}
//                       </span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           setFormData({ ...formData, bedrooms: formData.bedrooms + 1 })
//                         }
//                       >
//                         +
//                       </Button>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">Bathrooms</label>
//                     <div className="flex items-center gap-3">
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           setFormData({ ...formData, bathrooms: Math.max(0, formData.bathrooms - 1) })
//                         }
//                       >
//                         -
//                       </Button>
//                       <span className="w-8 text-center text-lg font-semibold">
//                         {formData.bathrooms}
//                       </span>
//                       <Button
//                         variant="outline"
//                         size="icon"
//                         onClick={() =>
//                           setFormData({ ...formData, bathrooms: formData.bathrooms + 1 })
//                         }
//                       >
//                         +
//                       </Button>
//                     </div>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">Size (sq ft)</label>
//                     <Input
//                       type="number"
//                       value={formData.size}
//                       onChange={(e) => setFormData({ ...formData, size: e.target.value })}
//                       placeholder="e.g., 1200"
//                       className="input-golden"
//                     />
//                   </div>
//                 </div>

//                 {/* Amenities */}
//                 <div>
//                   <label className="mb-4 block text-sm font-medium">Amenities</label>
//                   <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
//                     {amenities.map((amenity) => (
//                       <label
//                         key={amenity.id}
//                         className={cn(
//                           'flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all',
//                           formData.amenities.includes(amenity.id)
//                             ? 'border-gold bg-gold/5'
//                             : 'border-border hover:border-gold/50'
//                         )}
//                       >
//                         <Checkbox
//                           checked={formData.amenities.includes(amenity.id)}
//                           onCheckedChange={() => toggleAmenity(amenity.id)}
//                         />
//                         <span className="text-sm">{amenity.label}</span>
//                       </label>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 3: Location */}
//           {currentStep === 3 && (
//             <div className="animate-fade-in space-y-8">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Property Location</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Help guests find your property easily
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Map Placeholder */}
//                 <div className="aspect-video overflow-hidden rounded-xl border border-border bg-muted">
//                   <div className="flex h-full flex-col items-center justify-center text-muted-foreground">
//                     <div className="rounded-full bg-gold/10 p-4">
//                       <Plus className="h-8 w-8 text-gold" />
//                     </div>
//                     <p className="mt-4 font-medium">Pin your location on the map</p>
//                     <p className="text-sm">Click or search to set your property location</p>
//                   </div>
//                 </div>

//                 {/* Location Search */}
//                 <div>
//                   <label className="mb-2 block text-sm font-medium">Search Location</label>
//                   <Input
//                     value={formData.location}
//                     onChange={(e) => setFormData({ ...formData, location: e.target.value })}
//                     placeholder="Search for your address..."
//                     className="input-golden"
//                   />
//                 </div>

//                 {/* Address Fields */}
//                 <div className="grid gap-4 sm:grid-cols-2">
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">County/Region</label>
//                     <select className="input-golden w-full rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none">
//                       <option>Select county</option>
//                       <option>Nairobi</option>
//                       <option>Mombasa</option>
//                       <option>Kisumu</option>
//                       <option>Nakuru</option>
//                     </select>
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">City/Town</label>
//                     <Input placeholder="e.g., Nairobi" className="input-golden" />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">Estate/Area</label>
//                     <Input placeholder="e.g., Westlands" className="input-golden" />
//                   </div>
//                   <div>
//                     <label className="mb-2 block text-sm font-medium">Street Address</label>
//                     <Input placeholder="e.g., 123 Waiyaki Way" className="input-golden" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 4: Pricing */}
//           {currentStep === 4 && (
//             <div className="animate-fade-in space-y-8">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Set Your Price</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Competitive pricing helps you get more bookings
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Base Price */}
//                 <div className="rounded-xl border border-border bg-muted/30 p-6">
//                   <label className="mb-4 block text-sm font-medium">Base Price</label>
//                   <div className="flex items-center gap-4">
//                     <div className="relative flex-1">
//                       <span className="absolute left-4 top-1/2 -translate-y-1/2 text-lg font-medium text-muted-foreground">
//                         KES
//                       </span>
//                       <Input
//                         value={formData.price}
//                         onChange={(e) =>
//                           setFormData({
//                             ...formData,
//                             price: formatPrice(e.target.value.replace(/\D/g, '')),
//                           })
//                         }
//                         placeholder="0"
//                         className="input-golden pl-14 text-2xl font-bold"
//                       />
//                     </div>
//                     <select
//                       value={formData.priceUnit}
//                       onChange={(e) =>
//                         setFormData({ ...formData, priceUnit: e.target.value })
//                       }
//                       className="rounded-lg border border-border bg-card px-4 py-3 text-sm font-medium outline-none"
//                     >
//                       <option value="day">Per Day</option>
//                       <option value="week">Per Week</option>
//                       <option value="month">Per Month</option>
//                       <option value="year">Per Year</option>
//                     </select>
//                   </div>
//                   <p className="mt-3 text-sm text-muted-foreground">
//                     💡 Similar properties in your area: KES 20,000 - 35,000/month
//                   </p>
//                 </div>

//                 {/* Discounts */}
//                 <div>
//                   <h3 className="mb-4 font-medium">Long-term Discounts</h3>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <div className="rounded-lg border border-border p-4">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium">Weekly discount</span>
//                         <Input
//                           type="number"
//                           placeholder="5"
//                           className="w-20 text-right"
//                         />
//                       </div>
//                       <p className="mt-1 text-xs text-muted-foreground">
//                         % off for 7+ days
//                       </p>
//                     </div>
//                     <div className="rounded-lg border border-border p-4">
//                       <div className="flex items-center justify-between">
//                         <span className="text-sm font-medium">Monthly discount</span>
//                         <Input
//                           type="number"
//                           placeholder="10"
//                           className="w-20 text-right"
//                         />
//                       </div>
//                       <p className="mt-1 text-xs text-muted-foreground">
//                         % off for 28+ days
//                       </p>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Commission Info */}
//                 <div className="rounded-xl bg-gold/10 p-4">
//                   <div className="flex items-center gap-3">
//                     <Sparkles className="h-5 w-5 text-gold" />
//                     <div>
//                       <p className="font-medium">Platform fee: 5%</p>
//                       <p className="text-sm text-muted-foreground">
//                         If you charge KES 25,000, you'll receive KES 23,750
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 5: Photos */}
//           {currentStep === 5 && (
//             <div className="animate-fade-in space-y-8">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Add Photos</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Great photos help your listing stand out
//                 </p>
//               </div>

//               <div className="space-y-6">
//                 {/* Upload Zone */}
//                 <div className="rounded-xl border-2 border-dashed border-border p-12 text-center transition-colors hover:border-gold/50">
//                   <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
//                   <p className="mt-4 font-medium">Drag photos here or click to browse</p>
//                   <p className="mt-1 text-sm text-muted-foreground">
//                     Upload up to 20 photos (JPG, PNG, max 5MB each)
//                   </p>
//                   <Button variant="outline" className="mt-4">
//                     Select Photos
//                   </Button>
//                 </div>

//                 {/* Sample Images */}
//                 <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
//                   {[1, 2, 3, 4].map((i) => (
//                     <div
//                       key={i}
//                       className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
//                     >
//                       <div className="flex h-full items-center justify-center text-muted-foreground">
//                         <Plus className="h-8 w-8" />
//                       </div>
//                       {i === 1 && (
//                         <span className="absolute left-2 top-2 rounded-full bg-gold px-2 py-0.5 text-xs font-medium text-accent-foreground">
//                           Cover
//                         </span>
//                       )}
//                       <div className="absolute right-2 top-2 flex gap-1 opacity-0 transition-opacity group-hover:opacity-100">
//                         <button className="rounded-full bg-card p-1.5 shadow-md">
//                           <GripVertical className="h-4 w-4" />
//                         </button>
//                         <button className="rounded-full bg-destructive p-1.5 shadow-md text-destructive-foreground">
//                           <X className="h-4 w-4" />
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Tips */}
//                 <div className="rounded-xl bg-muted/50 p-4">
//                   <h4 className="font-medium">📸 Photography Tips</h4>
//                   <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
//                     <li>• Use natural lighting whenever possible</li>
//                     <li>• Show all rooms and key features</li>
//                     <li>• Clean and stage your property before shooting</li>
//                     <li>• Include exterior shots and views</li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Step 6: Review */}
//           {currentStep === 6 && (
//             <div className="animate-fade-in space-y-8">
//               <div className="text-center">
//                 <h2 className="text-2xl font-bold">Review & Publish</h2>
//                 <p className="mt-2 text-muted-foreground">
//                   Make sure everything looks good before publishing
//                 </p>
//               </div>

//               {/* Checklist */}
//               <div className="space-y-3">
//                 {[
//                   { label: 'Category selected', done: !!formData.category },
//                   { label: 'Property details added', done: !!formData.title },
//                   { label: 'Location set', done: !!formData.location },
//                   { label: 'Pricing configured', done: !!formData.price },
//                   { label: 'Photos uploaded', done: formData.images.length > 0 },
//                 ].map((item) => (
//                   <div
//                     key={item.label}
//                     className={cn(
//                       'flex items-center gap-3 rounded-lg border p-4',
//                       item.done ? 'border-success bg-success/5' : 'border-border'
//                     )}
//                   >
//                     <div
//                       className={cn(
//                         'flex h-6 w-6 items-center justify-center rounded-full',
//                         item.done ? 'bg-success text-success-foreground' : 'bg-muted'
//                       )}
//                     >
//                       {item.done ? (
//                         <Check className="h-4 w-4" />
//                       ) : (
//                         <span className="h-2 w-2 rounded-full bg-muted-foreground" />
//                       )}
//                     </div>
//                     <span className={cn(item.done && 'font-medium')}>{item.label}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* Terms */}
//               <div className="space-y-3">
//                 <label className="flex items-start gap-3">
//                   <Checkbox className="mt-0.5" />
//                   <span className="text-sm">
//                     I agree to the{' '}
//                     <a href="#" className="text-gold underline">
//                       Terms of Service
//                     </a>{' '}
//                     and{' '}
//                     <a href="#" className="text-gold underline">
//                       Privacy Policy
//                     </a>
//                   </span>
//                 </label>
//                 <label className="flex items-start gap-3">
//                   <Checkbox className="mt-0.5" />
//                   <span className="text-sm">
//                     I confirm I have the rights to list this property
//                   </span>
//                 </label>
//               </div>

//               {/* Publish Actions */}
//               <div className="grid gap-4 sm:grid-cols-2">
//                 <Button variant="gold" size="xl" className="w-full">
//                   <Sparkles className="h-5 w-5" />
//                   Publish Now
//                 </Button>
//                 <Button variant="outline" size="xl" className="w-full">
//                   Save as Draft
//                 </Button>
//               </div>

//               <p className="text-center text-sm text-muted-foreground">
//                 Your listing will be reviewed within 24 hours
//               </p>
//             </div>
//           )}

//           {/* Navigation */}
//           <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
//             <Button
//               variant="ghost"
//               onClick={prevStep}
//               disabled={currentStep === 1}
//               className="gap-2"
//             >
//               <ChevronLeft className="h-4 w-4" />
//               Back
//             </Button>

//             {currentStep < 6 ? (
//               <Button
//                 variant="gold"
//                 onClick={nextStep}
//                 disabled={currentStep === 1 && !formData.category}
//                 className="gap-2"
//               >
//                 Continue
//                 <ChevronRight className="h-4 w-4" />
//               </Button>
//             ) : null}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }
    