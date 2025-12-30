import axios from 'axios';
import { Tour, EnquiryFormData, EnquiryResponse } from '@/features/story/types/story.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.radkaat.com';

export const storyService = {
  // Fetch all JungleBook stories/tours
  async getTours(): Promise<Tour[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tours`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tours:', error);
      throw error;
    }
  },

  // Fetch single tour/itinerary details by ID
  async getTourById(tourId: number): Promise<Tour> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tours/${tourId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tour details:', error);
      throw error;
    }
  },

  // Submit enquiry form
  async submitEnquiry(enquiryData: EnquiryFormData): Promise<EnquiryResponse> {
    try {
      const response = await axios.post(`${API_BASE_URL}/api/enquiries`, enquiryData);
      return response.data;
    } catch (error) {
      console.error('Error submitting enquiry:', error);
      throw error;
    }
  },

  // Fetch tours by category/type (if needed)
  async getToursByCategory(category: string): Promise<Tour[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/api/tours`, {
        params: { category }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching tours by category:', error);
      throw error;
    }
  }
};