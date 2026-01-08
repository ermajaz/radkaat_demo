// Story Hooks - Custom hooks for story-related functionality
import { useAppSelector, useAppDispatch } from '@/lib/hooks';
import { fetchTours, fetchTourById, submitEnquiry, clearEnquiryState } from './storySlice';
import { EnquiryFormData } from './types/story.types';

export const useStories = () => {
  const dispatch = useAppDispatch();
  const { tours, isLoading, error } = useAppSelector(state => state.story);

  const loadTours = () => {
    dispatch(fetchTours());
  };

  const loadTourById = (tourId: string) => {
    dispatch(fetchTourById(tourId));
  };

  return {
    tours,
    isLoading,
    error,
    loadTours,
    loadTourById,
  };
};

export const useTourDetails = () => {
  const dispatch = useAppDispatch();
  const { currentTour, isLoading, error } = useAppSelector(state => state.story);

  const loadTour = (tourId: string) => {
    dispatch(fetchTourById(tourId));
  };

  return {
    tour: currentTour,
    isLoading,
    error,
    loadTour,
  };
};

export const useEnquiry = () => {
  const dispatch = useAppDispatch();
  const { isSubmitting, error, success } = useAppSelector(state => state.story.enquiry);

  const submitEnquiryForm = (data: EnquiryFormData) => {
    dispatch(submitEnquiry(data));
  };

  const resetEnquiryState = () => {
    dispatch(clearEnquiryState());
  };

  return {
    isSubmitting,
    error,
    success,
    submitEnquiryForm,
    resetEnquiryState,
  };
};