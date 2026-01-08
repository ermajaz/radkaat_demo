import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import {  EnquiryFormData, Trip } from './types/story.types';
import { storyService } from '@/services/story.service';
import { StoryState } from '@/components/sections/jungle-book-tour/types/tours.types';

const initialState: StoryState = {
  tours: [],
  currentTour: null,
  enquiry: {
    isSubmitting: false,
    error: null,
    success: false,
  },
  isLoading: false,
  error: null,
};

// Async thunks
export const fetchTours = createAsyncThunk(
  'story/fetchTours',
  async (_, { rejectWithValue }) => {
    try {
      const tours = await storyService.getTours();
      return tours;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch tours');
    }
  }
);

export const fetchTourById = createAsyncThunk(
  'story/fetchTourById',
  async (tourId: string, { rejectWithValue }) => {
    try {
      const tour = await storyService.getTourById(tourId);
      return tour;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch tour details');
    }
  }
);

export const submitEnquiry = createAsyncThunk(
  'story/submitEnquiry',
  async (enquiryData: EnquiryFormData, { rejectWithValue }) => {
    try {
      const response = await storyService.submitEnquiry(enquiryData);
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to submit enquiry');
    }
  }
);

export const fetchToursByCategory = createAsyncThunk(
  'story/fetchToursByCategory',
  async (category: string, { rejectWithValue }) => {
    try {
      const tours = await storyService.getToursByCategory(category);
      return tours;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch tours by category');
    }
  }
);

// Slice
export const storySlice = createSlice({
  name: 'story',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    clearEnquiryState: (state) => {
      state.enquiry = {
        isSubmitting: false,
        error: null,
        success: false,
      };
    },
    setCurrentTour: (state, action: PayloadAction<Trip | null>) => {
      state.currentTour = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Fetch Tours
    builder
      .addCase(fetchTours.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTours.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      })
      .addCase(fetchTours.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Fetch Tour by ID
      .addCase(fetchTourById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchTourById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentTour = action.payload;
      })
      .addCase(fetchTourById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      // Submit Enquiry
      .addCase(submitEnquiry.pending, (state) => {
        state.enquiry.isSubmitting = true;
        state.enquiry.error = null;
        state.enquiry.success = false;
      })
      .addCase(submitEnquiry.fulfilled, (state) => {
        state.enquiry.isSubmitting = false;
        state.enquiry.success = true;
      })
      .addCase(submitEnquiry.rejected, (state, action) => {
        state.enquiry.isSubmitting = false;
        state.enquiry.error = action.payload as string;
      })

      // Fetch Tours by Category
      .addCase(fetchToursByCategory.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchToursByCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tours = action.payload;
      })
      .addCase(fetchToursByCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearError, clearEnquiryState, setCurrentTour } = storySlice.actions;
export default storySlice.reducer;