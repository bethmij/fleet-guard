import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Dialog, DialogContent, DialogTitle } from '@/app/components/ui/dialog';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/app/components/ui/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu';
import {
  ArrowLeft,
  MoreVertical,
  Download,
  Share2,
  Trash2,
  Calendar,
  User,
  Phone,
  CreditCard,
  ChevronDown,
  ChevronUp,
  MapPin,
  FileText,
  Image as ImageIcon,
} from 'lucide-react';
import { format } from 'date-fns';

export function InspectionDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  
  const [photosExpanded, setPhotosExpanded] = useState(false);
  const [damagesExpanded, setDamagesExpanded] = useState(true);
  const [signaturesExpanded, setSignaturesExpanded] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

  // Mock data
  const inspection = {
    id: 'INS-2026-0001',
    status: 'Completed',
    date: new Date(2026, 0, 25, 14, 30),
    inspector: 'Driver Name',
    vehicle: {
      number: 'CAB-1234',
      make: 'Toyota',
      model: 'KDH Van',
      year: 2020,
      photo: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400',
    },
    customer: {
      name: 'Michael Brown',
      nicPassport: '199012345678',
      phone: '+94 77 123 4567',
      rentalStart: new Date(2026, 0, 25),
      rentalEnd: new Date(2026, 0, 30),
    },
    results: {
      healthScore: 92,
      damageCount: 2,
      severityBreakdown: {
        minor: 2,
        moderate: 0,
        major: 0,
      },
    },
    photos: [
      { id: '1', label: 'Front View', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400' },
      { id: '2', label: 'Rear View', url: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400' },
      { id: '3', label: 'Left Side', url: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400' },
      { id: '4', label: 'Right Side', url: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400' },
      { id: '5', label: 'Interior', url: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400' },
      { id: '6', label: 'Dashboard', url: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400' },
      { id: '7', label: 'Damage 1', url: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=400' },
      { id: '8', label: 'Damage 2', url: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?w=400' },
    ],
    damages: [
      {
        id: '1',
        type: 'Scratch',
        severity: 'minor',
        location: 'Front bumper, driver side',
        confidence: 92,
        photoId: '7',
      },
      {
        id: '2',
        type: 'Dent',
        severity: 'minor',
        location: 'Rear door, passenger side',
        confidence: 88,
        photoId: '8',
      },
    ],
  };

  const getHealthScoreColor = (score: number) => {
    if (score >= 80) return { bg: 'bg-[#4caf50]', text: 'text-[#4caf50]', label: 'Excellent' };
    if (score >= 60) return { bg: 'bg-[#fbbf24]', text: 'text-[#fbbf24]', label: 'Good' };
    return { bg: 'bg-[#dc2626]', text: 'text-[#dc2626]', label: 'Poor' };
  };

  const getSeverityBadge = (severity: string) => {
    const variants: Record<string, { bg: string; text: string }> = {
      minor: { bg: 'bg-yellow-100 dark:bg-yellow-900/30', text: 'text-yellow-700 dark:text-yellow-300' },
      moderate: { bg: 'bg-orange-100 dark:bg-orange-900/30', text: 'text-orange-700 dark:text-orange-300' },
      major: { bg: 'bg-red-100 dark:bg-red-900/30', text: 'text-red-700 dark:text-red-300' },
    };
    const variant = variants[severity] || variants.minor;
    return (
      <Badge className={`${variant.bg} ${variant.text} border-0`}>
        {severity.charAt(0).toUpperCase() + severity.slice(1)}
      </Badge>
    );
  };

  const scoreData = getHealthScoreColor(inspection.results.healthScore);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-6">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon" onClick={() => navigate('/driver/history')}>
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Inspection Details</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">{inspection.id}</p>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreVertical className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileText className="h-4 w-4 mr-2" />
                  Print
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600 dark:text-red-400">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Metadata Card */}
        <Card className="p-4 bg-white dark:bg-gray-800">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Report ID</p>
              <p className="font-medium text-gray-900 dark:text-white">{inspection.id}</p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Status</p>
              <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                {inspection.status}
              </Badge>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Date & Time</p>
              <p className="font-medium text-gray-900 dark:text-white flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {format(inspection.date, 'PPp')}
              </p>
            </div>
            <div>
              <p className="text-gray-500 dark:text-gray-400 mb-1">Inspector</p>
              <p className="font-medium text-gray-900 dark:text-white">{inspection.inspector}</p>
            </div>
          </div>
        </Card>

        {/* Vehicle Information */}
        <Card className="p-4 bg-white dark:bg-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Vehicle Information</h3>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={inspection.vehicle.photo}
              alt={inspection.vehicle.number}
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white">{inspection.vehicle.number}</h4>
              <p className="text-gray-600 dark:text-gray-400">
                {inspection.vehicle.make} {inspection.vehicle.model}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">{inspection.vehicle.year}</p>
            </div>
          </div>
        </Card>

        {/* Customer Information */}
        <Card className="p-4 bg-white dark:bg-gray-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Customer Information</h3>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <User className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspection.customer.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">NIC/Passport</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspection.customer.nicPassport}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                <p className="font-medium text-gray-900 dark:text-white">{inspection.customer.phone}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="h-5 w-5 text-gray-400" />
              <div className="flex-1">
                <p className="text-sm text-gray-500 dark:text-gray-400">Rental Period</p>
                <p className="font-medium text-gray-900 dark:text-white">
                  {format(inspection.customer.rentalStart, 'PP')} - {format(inspection.customer.rentalEnd, 'PP')}
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Inspection Results */}
        <Card className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-800/80">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">Inspection Results</h3>
          <div className="flex justify-center mb-6">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32">
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  className="text-gray-200 dark:text-gray-700"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="56"
                  stroke="currentColor"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                  className={scoreData.text}
                  strokeDasharray={`${(inspection.results.healthScore / 100) * 352} 352`}
                  transform="rotate(-90 64 64)"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-4xl font-bold ${scoreData.text}`}>{inspection.results.healthScore}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">/ 100</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-4">
            <Badge className={`${scoreData.bg} text-white text-base px-4 py-1`}>{scoreData.label}</Badge>
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white dark:bg-gray-700/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{inspection.results.damageCount}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Total</p>
            </div>
            <div className="bg-white dark:bg-gray-700/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-yellow-600">{inspection.results.severityBreakdown.minor}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Minor</p>
            </div>
            <div className="bg-white dark:bg-gray-700/50 rounded-lg p-3">
              <p className="text-2xl font-bold text-orange-600">{inspection.results.severityBreakdown.moderate}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Moderate</p>
            </div>
          </div>
        </Card>

        {/* Photos Section */}
        <Collapsible open={photosExpanded} onOpenChange={setPhotosExpanded}>
          <Card className="overflow-hidden bg-white dark:bg-gray-800">
            <CollapsibleTrigger asChild>
              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <ImageIcon className="h-5 w-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Photos ({inspection.photos.length})
                  </h3>
                </div>
                {photosExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 pt-0">
                <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                  {inspection.photos.map((photo) => (
                    <div
                      key={photo.id}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      onClick={() => setSelectedPhoto(photo.url)}
                    >
                      <img src={photo.url} alt={photo.label} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Damage Details */}
        <Collapsible open={damagesExpanded} onOpenChange={setDamagesExpanded}>
          <Card className="overflow-hidden bg-white dark:bg-gray-800">
            <CollapsibleTrigger asChild>
              <button className="w-full p-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-gray-400" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Damage Details ({inspection.damages.length})
                  </h3>
                </div>
                {damagesExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <div className="p-4 pt-0 space-y-3">
                {inspection.damages.map((damage) => (
                  <div key={damage.id} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-gray-900 dark:text-white">{damage.type}</h4>
                      {getSeverityBadge(damage.severity)}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      {damage.location}
                    </p>
                    <p className="text-xs text-gray-500">
                      AI Confidence: <span className="font-medium">{damage.confidence}%</span>
                    </p>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Card>
        </Collapsible>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button className="bg-[#dc2626] hover:bg-[#b91c1c] text-white">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline">
            <Share2 className="h-4 w-4 mr-2" />
            Share Report
          </Button>
        </div>
      </div>

      {/* Photo Preview Modal */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">Photo Preview</DialogTitle>
          {selectedPhoto && (
            <div className="relative">
              <img src={selectedPhoto} alt="Photo preview" className="w-full h-auto rounded-lg" />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}