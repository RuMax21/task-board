import type { UseMutationResult } from "@tanstack/react-query";
import type { AuthResponse, LoginRequest, RegisterRequest } from "../model";

export type UseLoginReturn = UseMutationResult<AuthResponse, unknown, LoginRequest, unknown>;
export type UseRegisterReturn = UseMutationResult<AuthResponse, unknown, RegisterRequest, unknown>;
