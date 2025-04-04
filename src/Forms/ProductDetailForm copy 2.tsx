"use client";

import { useState, useEffect } from "react";
import { Box, Button, Typography, TextField, IconButton, Paper, Stack } from "@mui/material";
import { Add, Delete } from "@mui/icons-material";

// Define types
interface Field {
  label: string;
  value: string;
}

interface Section {
  title: string;
  fields: Field[];
}

interface Specification {
  sections: Section[];
}


const ProductDetailForm = ({onSave}:{onSave:(data:any)=>void}) => {
  const [specifications, setSpecifications] = useState<Specification>({ sections: [] });
  

  
  // Add a new section
  const addSection = () => {
    setSpecifications((prev) => ({
      sections: [...prev.sections, { title: "", fields: [{ label: "", value: "" }] }],
    }));
  };

  // Remove a section
  const removeSection = (index: number) => {
    setSpecifications((prev) => ({
      sections: prev.sections.filter((_, i) => i !== index),
    }));
  };

  // Add a field to a section
  const addField = (sectionIndex: number) => {
    setSpecifications((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[sectionIndex].fields.push({ label: "", value: "" });
      return { sections: updatedSections };
    });
  };

  // Remove a field from a section
  const removeField = (sectionIndex: number, fieldIndex: number) => {
    setSpecifications((prev) => {
      const updatedSections = [...prev.sections];
      updatedSections[sectionIndex].fields = updatedSections[sectionIndex].fields.filter(
        (_, i) => i !== fieldIndex
      );
      return { sections: updatedSections };
    });
  };

  // Handle input change
  const handleInputChange = (
    sectionIndex: number,
    fieldIndex: number | null,
    key: "title" | "label" | "value",
    value: string
  ) => {
    setSpecifications((prev) => {
      const updatedSections:any = [...prev.sections];

      if (fieldIndex === null) {
        // Update section title
        updatedSections[sectionIndex].title = value;
      } else {
        // Update field label or value
        updatedSections[sectionIndex].fields[fieldIndex][key] = value;
      }

      return { sections: updatedSections };
    });
  };

  useEffect(() => {
    onSave(specifications);
    console.log("Updated specifications:", specifications);
  }, [specifications, onSave]);
  
  // Handle form submission
  // const handleSubmit = () => {
  //   console.log("Submitted Specifications:", specifications);
  //   onSave(specifications);
  // };

  return (
    <Box sx={{ mx: "auto", p: 3, boxShadow: 3, borderRadius: 2, backgroundColor: "#fff" }}>
      <Typography variant="h6" gutterBottom>
        Product Specifications
      </Typography>

      {specifications.sections.map((section, sectionIndex) => (
        <Paper key={sectionIndex} sx={{ p: 2, mb: 2 }}>
          <Stack spacing={2}>
            {/* Section Title */}
            <TextField
              label="Section Title"
              fullWidth
              value={section.title}
              onChange={(e) => handleInputChange(sectionIndex, null, "title", e.target.value)}
            />

            {/* Fields */}
            {section.fields.map((field, fieldIndex) => (
              <Stack key={fieldIndex} direction="row" spacing={2}>
                <TextField
                  label="Label"
                  fullWidth
                  value={field.label}
                  onChange={(e) => handleInputChange(sectionIndex, fieldIndex, "label", e.target.value)}
                />
                <TextField
                  label="Value"
                  fullWidth
                  value={field.value}
                  onChange={(e) => handleInputChange(sectionIndex, fieldIndex, "value", e.target.value)}
                />
                <IconButton onClick={() => removeField(sectionIndex, fieldIndex)} color="error">
                  <Delete />
                </IconButton>
              </Stack>
            ))}

            {/* Add Field Button */}
            <Button variant="outlined" startIcon={<Add />} onClick={() => addField(sectionIndex)}>
              Add Field
            </Button>
          </Stack>

          {/* Remove Section Button */}
          <Button variant="outlined" color="error" sx={{ mt: 2 }} onClick={() => removeSection(sectionIndex)}>
            Remove Section
          </Button>
        </Paper>
      ))}

      {/* Add Section Button */}
      <Button variant="contained" color="primary" onClick={addSection} startIcon={<Add />} sx={{ mb: 2 }}>
        Add Section
      </Button>

      {/* Submit Button */}
      {/* <Button onClick={handleSubmit} variant="contained" color="secondary" fullWidth>
        Submit Product
      </Button> */}
    </Box>
  );
};

export default ProductDetailForm;
