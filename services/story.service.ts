import axios from 'axios';
import { EnquiryFormData, EnquiryResponse, Trip } from '@/features/story/types/story.types';
import { Tour } from '@/components/sections/jungle-book-tour/types/tours.types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const storyService = {
  // Fetch all JungleBook stories/tours
  async getTours(): Promise<Tour[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}trips/list`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tours:', error);
      throw error;
    }
  },

  // Fetch single tour/itinerary details by ID
  async getTourById(tourId: string): Promise<Trip> {
    try {
      const response = await axios.get(`${API_BASE_URL}trips/${tourId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching tour details:', error);
      throw error;
    }
  },

  // Submit enquiry form
  async submitEnquiry(enquiryData: EnquiryFormData): Promise<EnquiryResponse> {
    try {
      console.log(enquiryData)
      const response = await axios.post(`${API_BASE_URL}trip-enquiries`, enquiryData);
      return response.data;
    } catch (error:any) {
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