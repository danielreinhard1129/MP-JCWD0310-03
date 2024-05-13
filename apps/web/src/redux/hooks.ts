"use client";
import { useDispatch, useSelector, useStore } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Remove .withTypes from your custom hooks
export const useAppDispatch = useDispatch<AppDispatch>();
export const useAppSelector = useSelector<RootState>();
export const useAppStore = useStore();
