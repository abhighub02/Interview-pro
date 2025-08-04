"use server"; // This directive tells Next.js to run this code on the server.

// Note: The 'zod' import is not strictly needed for these functions,
// but it's often used in conjunction with server actions for validation.
import { z } from "zod";

// This function extracts the user's desired job role from their response.
export async function capture_user_role(response: string) {
  const lowerResponse = response.toLowerCase();

  if (lowerResponse.includes("developer") || lowerResponse.includes("engineer")) {
    return {
      role: "Software Developer",
      success: true,
      message: "Role extracted successfully"
    };
  }
  
  if (lowerResponse.includes("designer") || lowerResponse.includes("ux")) {
    return {
      role: "UI/UX Designer",
      success: true,
      message: "Role extracted successfully"
    };
  }

  return {
    role: null,
    success: false,
    message: "Could not identify the role"
  };
}


// This function extracts the user's desired experience level from their response.
export async function capture_user_level(response: string) {
  const lowerResponse = response.toLowerCase();

  if (lowerResponse.includes("junior")) {
    return {
      level: "junior",
      success: true,
      message: "Level extracted successfully"
    };
  }
  
  if (lowerResponse.includes("mid") || lowerResponse.includes("intermediate")) {
    return {
      level: "mid-level",
      success: true,
      message: "Level extracted successfully"
    };
  }

  if (lowerResponse.includes("senior") || lowerResponse.includes("lead")) {
    return {
      level: "senior",
      success: true,
      message: "Level extracted successfully"
    };
  }

  return {
    level: null,
    success: false,
    message: "Could not identify the level"
  };
}


// This function extracts the user's desired tech stack from their response.
export async function capture_tech_stack(response: string) {
  const lowerResponse = response.toLowerCase();

  if (lowerResponse.includes("react")) {
    return {
      techstack: "React",
      success: true,
      message: "Tech stack extracted successfully"
    };
  }

  if (lowerResponse.includes("node") || lowerResponse.includes("express")) {
    return {
      techstack: "Node.js",
      success: true,
      message: "Tech stack extracted successfully"
    };
  }

  if (lowerResponse.includes("python") || lowerResponse.includes("django")) {
    return {
      techstack: "Python",
      success: true,
      message: "Tech stack extracted successfully"
    };
  }

  if (lowerResponse.includes("java") || lowerResponse.includes("spring")) {
    return {
      techstack: "Java",
      success: true,
      message: "Tech stack extracted successfully"
    };
  }

  return {
    techstack: null,
    success: false,
    message: "Could not identify the tech stack"
  };
}



// This function extracts the user's desired interview type.
export async function capture_interview_type(response: string) {
  const lowerResponse = response.toLowerCase();

  if (lowerResponse.includes("technical")) {
    return {
      type: "technical",
      success: true,
      message: "Interview type extracted successfully"
    };
  }

  if (lowerResponse.includes("behavioral")) {
    return {
      type: "behavioral",
      success: true,
      message: "Interview type extracted successfully"
    };
  }
  
  if (lowerResponse.includes("mixed") || lowerResponse.includes("both")) {
    return {
      type: "mixed",
      success: true,
      message: "Interview type extracted successfully"
    };
  }

  // If no specific type is found, return an error.
  return {
    type: null,
    success: false,
    message: "Could not identify the interview type"
  };
}

"use server";

// This function extracts the number of questions from the user's response.
export async function capture_amount(response: string) {
  const lowerResponse = response.toLowerCase();
  
  // A simple way to extract a number from a string
  const numberMatch = lowerResponse.match(/\d+/);

  if (numberMatch) {
    return {
      amount: parseInt(numberMatch[0]),
      success: true,
      message: "Amount extracted successfully"
    };
  }

  // Handle cases where the user says a word like "three"
  const numberWords = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
    'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10
  };
  
  // --- The corrected part is here ---
  for (const word in numberWords) {
    if (lowerResponse.includes(word)) {
      return {
        amount: numberWords[word as keyof typeof numberWords], // <-- This is the fix
        success: true,
        message: "Amount extracted successfully"
      };
    }
  }
  // --- End of corrected part ---

  // If no number is found, return an error.
  return {
    amount: null,
    success: false,
    message: "Could not identify the number of questions"
  };
}