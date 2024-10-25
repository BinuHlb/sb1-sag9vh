import { Job, LoginCredentials, ApiResponse, User } from "./types";

const API_DELAY = 500; // Simulated API delay

// Simulated authentication
let currentUser: User | null = null;

export async function login(credentials: LoginCredentials): Promise<ApiResponse<User>> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  
  if (credentials.email === "admin@example.com" && credentials.password === "admin") {
    currentUser = {
      id: 1,
      email: credentials.email,
      name: "Admin User",
      role: "admin"
    };
    return { success: true, data: currentUser, message: "Login successful" };
  }
  
  throw new Error("Invalid credentials");
}

export async function logout(): Promise<ApiResponse<null>> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  currentUser = null;
  return { success: true, data: null, message: "Logout successful" };
}

export async function getCurrentUser(): Promise<User | null> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return currentUser;
}

// CRUD operations for jobs
export async function createJob(job: Omit<Job, "id">): Promise<ApiResponse<Job>> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  const newJob = { ...job, id: Date.now() };
  return { success: true, data: newJob, message: "Job created successfully" };
}

export async function updateJob(id: number, job: Partial<Job>): Promise<ApiResponse<Job>> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return { success: true, data: { ...job, id } as Job, message: "Job updated successfully" };
}

export async function deleteJob(id: number): Promise<ApiResponse<null>> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return { success: true, data: null, message: "Job deleted successfully" };
}