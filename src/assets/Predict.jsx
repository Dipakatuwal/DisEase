import React, { useState } from "react";
import { useUser } from "../context/UserContext"; // Ensure the path is correct

const Predict = () => {
  const { user } = useUser(); // Get user info from context
  const [symptoms, setSymptoms] = useState(Array(5).fill("Select Symptom")); // State for selected symptoms
  const [predictionResult, setPredictionResult] = useState(""); // State to store the prediction result

  // Symptom-to-disease mapping (each disease has 5 symptoms)
  const diseases = [
    {
      name: "COVID-19",
      symptoms: ["Fever", "Cough", "Fatigue", "Shortness of Breath", "Loss of Taste"],
    },
    {
      name: "Migraine",
      symptoms: ["Headache", "Nausea", "Sensitivity to Light", "Dizziness", "Blurred Vision"],
    },
    {
      name: "Gastritis",
      symptoms: ["Nausea", "Vomiting", "Abdominal Pain", "Bloating", "Loss of Appetite"],
    },
    {
      name: "Asthma",
      symptoms: ["Shortness of Breath", "Wheezing", "Chest Pain", "Cough", "Fatigue"],
    },
    {
      name: "Dengue",
      symptoms: ["Fever", "Headache", "Joint Pain", "Skin Rash", "Fatigue"],
    },
  ];

  // Function to handle symptom selection changes
  const handleSymptomChange = (index, value) => {
    const updatedSymptoms = [...symptoms];
    updatedSymptoms[index] = value;
    setSymptoms(updatedSymptoms);
  };

  // Function to predict a single disease based on the selected symptoms
  const handlePredict = (event) => {
    event.preventDefault();

    const selectedSymptoms = symptoms.filter((s) => s !== "Select Symptom");

    if (selectedSymptoms.length < 5) {
      setPredictionResult("Please select all 5 symptoms to get an accurate prediction.");
      return;
    }

    // Match the disease with the highest number of matching symptoms
    let bestMatch = { name: "Unknown Disease", matchCount: 0 };

    diseases.forEach((disease) => {
      const matchCount = disease.symptoms.filter((symptom) =>
        selectedSymptoms.includes(symptom)
      ).length;

      if (matchCount > bestMatch.matchCount) {
        bestMatch = { name: disease.name, matchCount };
      }
    });

    // Create a prediction result message
    const result =
      bestMatch.matchCount === 5
        ? `Based on your symptoms: ${selectedSymptoms.join(
            ", "
          )}, the predicted condition is: ${bestMatch.name}.`
        : "No exact match found. Please consult a doctor for a precise diagnosis.";

    setPredictionResult(result); // Set the prediction result
  };

  // Options for symptom dropdown
  const symptomOptions = [
    "Select Symptom",
    "Fever",
    "Cough",
    "Fatigue",
    "Shortness of Breath",
    "Loss of Taste",
    "Headache",
    "Nausea",
    "Sensitivity to Light",
    "Dizziness",
    "Blurred Vision",
    "Vomiting",
    "Abdominal Pain",
    "Bloating",
    "Loss of Appetite",
    "Wheezing",
    "Chest Pain",
    "Joint Pain",
    "Skin Rash",
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-2xl font-bold mb-4">
        Welcome back, {user ? user.username : "Guest"} 👋
      </h1>

      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">
          Select Your Symptoms, {user ? user.username : "Guest"}
        </h2>

        <form onSubmit={handlePredict}>
          {symptoms.map((symptom, index) => (
            <div key={index} className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Symptom {index + 1}:
              </label>
              <select
                value={symptom}
                onChange={(e) => handleSymptomChange(index, e.target.value)}
                className="w-full px-3 py-2 border rounded"
              >
                {symptomOptions.map((option, i) => (
                  <option key={i} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          ))}

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
          >
            Predict
          </button>
        </form>

        {/* Display the prediction result if available */}
        {predictionResult && (
          <div className="mt-4 p-4 bg-gray-100 rounded shadow">
            <h3 className="text-lg font-semibold">Prediction Result:</h3>
            <p>{predictionResult}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Predict;
