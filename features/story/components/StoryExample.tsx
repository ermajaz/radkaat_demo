// Example component showing how to use the story slice
'use client';

import { useEffect } from 'react';
import { useStories, useTourDetails, useEnquiry } from '../hooks';
import EnquiryFormModal from './EnquireFormModal';

export function StoryExample() {
  const { tours, isLoading: toursLoading, loadTours } = useStories();
  const { tour, loadTour } = useTourDetails();
  const { submitEnquiryForm, isSubmitting, success, error } = useEnquiry();

  useEffect(() => {
    // Load all tours on component mount
    loadTours();
  }, [loadTours]);

  const handleLoadTour = (tourId: number) => {
    loadTour(tourId);
  };

  if (toursLoading) {
    return <div>Loading tours...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">JungleBook Stories</h1>

      {/* Tours List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {tours.map((tour) => (
          <div key={tour.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{tour.title}</h3>
            <p className="text-sm text-gray-600">{tour.excerpt}</p>
            <button
              onClick={() => handleLoadTour(tour.id)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Current Tour Details */}
      {tour && (
        <div className="border rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">{tour.title}</h2>
          <p className="mb-4">{tour.description}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Itinerary</h3>
              {tour.content
                .filter(section => section.type === 'itinerary')
                .map((section, index) => (
                  <div key={index}>
                    {section.type === 'itinerary' && section.data.map((item, idx) => (
                      <div key={idx} className="mb-2">
                        <strong>{item.day}:</strong> {item.title}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
            <div>
              <h3 className="font-semibold mb-2">Price: ${tour.price}</h3>
              <EnquiryFormModal
                open={false} // This would be controlled by state
                onClose={() => {}}
                tourId={tour.id}
                tourTitle={tour.title}
              />
            </div>
          </div>
        </div>
      )}

      {/* Enquiry Status */}
      {isSubmitting && <div className="text-blue-500">Submitting enquiry...</div>}
      {success && <div className="text-green-500">Enquiry submitted successfully!</div>}
      {error && <div className="text-red-500">Error: {error}</div>}
    </div>
  );
}