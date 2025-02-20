import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore";

export const useUserStore = create((set) => ({
	loading: false,

	updateProfile: async (data) => {
		try {
			set({ loading: true });

			// Include travelPreferences in the data sent to the backend
			const updatedData = {
				...data,
				travelPreferences: data.travelPreferences || [], // Ensure travelPreferences is always an array
			};

			// Send the request to update the profile
			const res = await axiosInstance.put("/users/update", updatedData);

			// Update the authUser state with the new data
			useAuthStore.getState().setAuthUser(res.data.user);

			toast.success("Profile updated successfully");
		} catch (error) {
			toast.error(error.response?.data?.message || "Something went wrong");
		} finally {
			set({ loading: false });
		}
	},
}));
