import { useNavigate, useParams } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { 
  ArrowLeft, 
  Edit, 
  MoreVertical, 
  Car, 
  Calendar, 
  Activity,
  MapPin,
  FileText,
  Wrench
} from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function VehicleDetails() {
  const navigate = useNavigate();
  const { vehicleId } = useParams();

  const vehicle = {
    id: vehicleId || 'CAB-4523',
    make: 'Toyota',
    model: 'Prius',
    year: 2020,
    type: 'Car',
    color: 'White',
    license: 'ABC-1234',
    vin: '1HGBH41JXMN109186',
    status: 'Available',
    health: 92,
    purchaseDate: '01/15/2020',
    lastService: '12/20/2025',
    nextService: '03/20/2026',
    mileage: '45,000 km',
    image: 'https://images.unsplash.com/photo-1758179128122-6079c9cb3e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlJTIwc2VkYW4lMjBwYXJrZWR8ZW58MXx8fHwxNzY5NTE0OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
  };

  const inspections = [
    { date: '2 days ago', health: 92, inspector: 'Kamal Perera', damages: 2 },
    { date: '1 week ago', health: 89, inspector: 'Nimal Silva', damages: 3 },
    { date: '2 weeks ago', health: 87, inspector: 'Sunil Fernando', damages: 4 },
  ];

  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/manager/fleet')}
            className="border-white/10 text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">{vehicle.id}</h1>
            <p className="text-slate-400 mt-1">{vehicle.make} {vehicle.model} {vehicle.year}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button 
            onClick={() => navigate(`/manager/fleet/${vehicleId}/edit`)}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Edit className="h-4 w-4 mr-2" />
            Edit
          </Button>
          <Button variant="outline" size="icon" className="border-white/10 text-white">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Vehicle Image and Basic Info */}
        <div className="lg:col-span-2 space-y-6">
          {/* Vehicle Image */}
          <div className="relative rounded-2xl overflow-hidden h-96">
            <ImageWithFallback
              src={vehicle.image}
              alt={vehicle.id}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          {/* Vehicle Information */}
          <GlassCard title="Vehicle Information">
            <div className="grid grid-cols-2 gap-6">
              <InfoItem label="Vehicle Number" value={vehicle.id} />
              <InfoItem label="Make" value={vehicle.make} />
              <InfoItem label="Model" value={vehicle.model} />
              <InfoItem label="Year" value={vehicle.year} />
              <InfoItem label="Type" value={vehicle.type} />
              <InfoItem label="Color" value={vehicle.color} />
              <InfoItem label="License Plate" value={vehicle.license} />
              <InfoItem label="VIN" value={vehicle.vin} />
              <InfoItem label="Mileage" value={vehicle.mileage} />
              <InfoItem label="Purchase Date" value={vehicle.purchaseDate} />
            </div>
          </GlassCard>

          {/* Inspection History */}
          <GlassCard title="Inspection History">
            <div className="space-y-3">
              {inspections.map((inspection, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex-1">
                    <p className="font-semibold text-white mb-1">{inspection.date}</p>
                    <p className="text-sm text-slate-400">{inspection.inspector}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-lg font-bold text-green-400">{inspection.health}</p>
                      <p className="text-xs text-slate-500">Health</p>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-orange-400">{inspection.damages}</p>
                      <p className="text-xs text-slate-500">Damages</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="ghost" className="w-full mt-4 text-blue-400">
              View All Inspections
            </Button>
          </GlassCard>
        </div>

        {/* Right Column - Status and Actions */}
        <div className="space-y-6">
          {/* Health Score */}
          <GlassCard>
            <div className="text-center">
              <Activity className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <p className="text-slate-400 text-sm mb-2">Health Score</p>
              <p className="text-5xl font-bold text-green-400 mb-2">{vehicle.health}</p>
              <p className="text-slate-500 text-sm">Excellent Condition</p>
            </div>
          </GlassCard>

          {/* Status */}
          <GlassCard>
            <div className="space-y-4">
              <div>
                <p className="text-slate-400 text-sm mb-2">Current Status</p>
                <span className="px-4 py-2 rounded-lg text-sm font-medium bg-green-500/20 border border-green-500/30 text-green-300">
                  {vehicle.status}
                </span>
              </div>
            </div>
          </GlassCard>

          {/* Maintenance */}
          <GlassCard title="Maintenance">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Wrench className="h-5 w-5 text-blue-400" />
                <div className="flex-1">
                  <p className="text-white text-sm">Last Service</p>
                  <p className="text-slate-400 text-xs">{vehicle.lastService}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-orange-400" />
                <div className="flex-1">
                  <p className="text-white text-sm">Next Service</p>
                  <p className="text-slate-400 text-xs">{vehicle.nextService}</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <div className="space-y-2">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              <MapPin className="h-4 w-4 mr-2" />
              View on Map
            </Button>
            <Button variant="outline" className="w-full border-white/10 text-white">
              <FileText className="h-4 w-4 mr-2" />
              View All Reports
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function GlassCard({ title, children }: any) {
  return (
    <div className="relative rounded-2xl overflow-hidden">
      <div className="absolute inset-0 bg-white/5 backdrop-blur-md border border-white/10"></div>
      <div className="relative p-6">
        {title && <h2 className="text-xl font-bold text-white mb-6">{title}</h2>}
        {children}
      </div>
    </div>
  );
}

function InfoItem({ label, value }: any) {
  return (
    <div>
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className="text-white font-medium">{value}</p>
    </div>
  );
}
