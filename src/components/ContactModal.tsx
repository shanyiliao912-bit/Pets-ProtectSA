import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Phone, Mail } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    suburb: '',
    subject: 'General Foster Inquiry',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
      <div 
        className="relative w-full max-w-lg bg-[#FFF9F2] rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-stone-500 hover:text-stone-800 rounded-full hover:bg-stone-100 transition-colors"
          aria-label="Close contact modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-14 h-14 mx-auto bg-[#5E8B60]/10 rounded-full flex items-center justify-center text-[#5E8B60]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#333333]">Message Received!</h3>
            <p className="text-sm text-stone-600 max-w-xs mx-auto">
              Thank you, {formData.name || 'friend'}. Our Adelaide foster coordinator will get back to you within 24 hours.
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-[#5E8B60] text-white text-xs font-bold rounded-lg hover:bg-[#3F6341] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-2 text-[#5E8B60]">
              <MessageSquare className="w-5 h-5" />
              <span className="text-xs font-bold uppercase tracking-wider">Adelaide Support Team</span>
            </div>

            <h3 className="text-2xl font-bold text-[#333333] mb-1 font-display">
              Have Questions Before Fostering?
            </h3>
            <p className="text-xs text-stone-600 mb-6">
              Our team of local South Australian animal coordinators is here to guide you with rental advice, pet pairings, and schedule planning.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">Your Name *</label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Liam Smith"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60] focus:ring-1 focus:ring-[#5E8B60]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="liam@example.com.au"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60] focus:ring-1 focus:ring-[#5E8B60]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Mobile</label>
                  <input
                    type="tel"
                    placeholder="0400 000 000"
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60] focus:ring-1 focus:ring-[#5E8B60]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Your Adelaide Suburb</label>
                  <input
                    type="text"
                    placeholder="e.g. Norwood, Glenelg"
                    value={formData.suburb}
                    onChange={e => setFormData({ ...formData, suburb: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60] focus:ring-1 focus:ring-[#5E8B60]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">Topic</label>
                  <select
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60]"
                  >
                    <option value="General Foster Inquiry">General Foster Inquiry</option>
                    <option value="Rental Approval Questions">Rental Approval Questions</option>
                    <option value="48-Hour Weekend Respite">48-Hour Weekend Respite</option>
                    <option value="Volunteer Dog Walking">Volunteer Dog Walking</option>
                    <option value="Student / Uni Fostering">Student / Uni Fostering</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">How can we help? *</label>
                <textarea
                  required
                  rows={3}
                  placeholder="Tell us about your home, schedule, or questions..."
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 text-sm bg-white rounded-lg border border-stone-200 focus:outline-hidden focus:border-[#5E8B60]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-[#5E8B60] hover:bg-[#3F6341] text-white font-bold rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

              <div className="pt-3 border-t border-stone-200/60 flex items-center justify-between text-xs text-stone-500">
                <span className="flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-[#5E8B60]" />
                  Adelaide Helpline: 1300 477 722
                </span>
                <span className="flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-[#5E8B60]" />
                  team@petsandprotectsa.org.au
                </span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
