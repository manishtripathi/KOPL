import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

export default function CareerForm({payload,handleChange, handleSubmit}:any){
    return(
<form onSubmit={handleSubmit} className="space-y-6">

<div className="form-group">
  <label htmlFor="jobTitle" className="mb-1 font-medium">Job Title</label>
  <TextField
    name="jobTitle"
    id="jobTitle"
    placeholder="Enter job title"
    value={payload.jobTitle}
    onChange={handleChange}
    variant="outlined"
    fullWidth
  />
</div>

<div className="form-group">
  <label htmlFor="jobDescription" className="mb-1 font-medium">Job Description</label>
  <TextField
    name="jobDescription"
    id="jobDescription"
    placeholder="Enter job description"
    value={payload.jobDescription}
    onChange={handleChange}
    multiline
    rows={4}
    variant="outlined"
    fullWidth
  />
</div>

<div className="form-group">
  <label htmlFor="jobType" className="mb-1 font-medium">Job Type</label>
  <TextField
    name="jobType"
    id="jobType"
    placeholder="e.g., Full-time, Part-time"
    value={payload.jobType}
    onChange={handleChange}
    variant="outlined"
    fullWidth
  />
</div>

<div className="form-group">
  <InputLabel id="experience-label" className="mb-1 font-medium">Experience Level</InputLabel>
  <FormControl fullWidth>
    <Select
      labelId="experience-label"
      name="experienceLevel"
      value={payload.experienceLevel}
      onChange={handleChange}
    >
      <MenuItem value="">Select Experience Level</MenuItem>
      <MenuItem value="Fresher">Fresher</MenuItem>
      <MenuItem value="1 to 2 Years">1 to 2 Years</MenuItem>
      <MenuItem value="2 to 5 Years">2 to 5 Years</MenuItem>
      <MenuItem value="5 to 7 Years">5 to 7 Years</MenuItem>
      <MenuItem value="More than 7 Years">More than 7 Years</MenuItem>
    </Select>
  </FormControl>
</div>

<div className="button-wrapper">
  <Button type="submit" variant="contained" color="primary">

    Submit Career Info
  </Button>
</div>
</form>
    )
}