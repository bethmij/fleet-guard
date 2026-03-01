import { useNavigate, useParams } from 'react-router';
import { Button } from '@/app/components/ui/button';
import { ArrowLeft, Download, Share2, Car, User, FileText, Activity } from 'lucide-react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function ManagerInspectionDetail() {
  const navigate = useNavigate();
  const { inspectionId } = useParams();

  const inspection = {
    id: inspectionId || '#INS-001234',
    date: '2 hours ago',
    vehicle: { id: 'CAB-4523', make: 'Toyota', model: 'Prius', year: 2020 },
    customer: { name: 'Rajitha Fernando', phone: '+94 77 123 4567', email: 'rajitha@example.com' },
    inspector: { name: 'Kamal Perera', id: 'DRV-0123' },
    health: 92,
    damages: [
      { type: 'Scratch', severity: 'Minor', location: 'Front Bumper', confidence: 92 },
      { type: 'Dent', severity: 'Moderate', location: 'Rear Door', confidence: 88 },
    ],
    photos: [
      'https://images.unsplash.com/photo-1758179128122-6079c9cb3e4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB2ZWhpY2xlJTIwc2VkYW4lMjBwYXJrZWR8ZW58MXx8fHwxNzY5NTE0OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
  };

  return (
    <div className="space-y-6 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/manager/inspections')}
            className="border-white/10 text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">{inspection.id}</h1>
            <p className="text-slate-400 mt-1">{inspection.date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Download className="h-4 w-4 mr-2" />
            Download PDF
          </Button>
          <Button variant="outline" className="border-white/10 text-white">
            <Share2 className="h-4 w-4 mr-2" />
            Share
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard>
          <div className="flex items-center gap-3 mb-4">
            <Car className="h-5 w-5 text-blue-400" />
            <h3 className="font-bold text-white">Vehicle</h3>
          </div>
          <p className="text-2xl font-bold text-white mb-1">{inspection.vehicle.id}</p>
          <p className="text-slate-400">{inspection.vehicle.make} {inspection.vehicle.model} {inspection.vehicle.year}</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-3 mb-4">
            <User className="h-5 w-5 text-green-400" />
            <h3 className="font-bold text-white">Customer</h3>
          </div>
          <p className="text-2xl font-bold text-white mb-1">{inspection.customer.name}</p>
          <p className="text-slate-400">{inspection.customer.phone}</p>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-5 w-5 text-orange-400" />
            <h3 className="font-bold text-white">Inspector</h3>
          </div>
          <p className="text-2xl font-bold text-white mb-1">{inspection.inspector.name}</p>
          <p className="text-slate-400">{inspection.inspector.id}</p>
        </GlassCard>
      </div>

      <GlassCard>
        <div className="text-center">
          <Activity className="h-16 w-16 text-green-400 mx-auto mb-4" />
          <p className="text-slate-400 mb-2">Health Score</p>
          <p className="text-6xl font-bold text-green-400 mb-2">{inspection.health}</p>
          <p className="text-slate-500">Excellent Condition</p>
        </div>
      </GlassCard>

      <GlassCard title="Detected Damages">
        <div className="space-y-3">
          {inspection.damages.map((damage, index) => (
            <div key={index} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-white">{damage.type} - {damage.severity}</p>
                  <p className="text-sm text-slate-400">{damage.location}</p>
                </div>
                <p className="text-sm text-slate-500">{damage.confidence}% confidence</p>
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      <GlassCard title="Inspection Photos">
        <div className="grid grid-cols-3 gap-4">
          {inspection.photos.map((photo, index) => (
            <div key={index} className="relative rounded-xl overflow-hidden h-40">
              <ImageWithFallback
                src={photo}
                alt={`Photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </GlassCard>
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
