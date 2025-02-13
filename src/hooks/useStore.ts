import { AppDispatch, RootState } from "#/store/store";
import { useDispatch, useSelector, useStore } from "react-redux";

export const useAppSelector = useSelector.withTypes<RootState>();

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
