import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";

const ProjectsCard = ({ projects }) => {
  // Determine the link for the button (prefer site link over code link)
  const detailsLink = projects.site || projects.code;
  const isPrivate = projects.code === null;

  return (
    <Card
    className="card"
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
      maxWidth: "850px",
      height: "300px",
      boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
      borderRadius: "10px",
      padding: "2rem",
      gap: "2rem",
    }}
    data-aos="slide-up"
    data-aos-offset="200"
    data-aos-delay="500"
    data-aos-duration="1000"
    data-aos-easing="ease"
    data-aos-once="true"
  >
    <CardMedia
      component="img"
      sx={{ 
        width: "30%", 
        height: "auto",
        objectFit: "cover",
        borderRadius: "5px"
      }}
      image={projects.image}
      alt={projects.title}
    />
    <CardContent sx={{ flex: 1, textAlign: "left", display: "flex", flexDirection: "column", justifyContent: "center" }}>
      <Typography gutterBottom variant="h5" component="div">
        {projects.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {projects.text}
      </Typography>
      {detailsLink && (
        <CardActions sx={{ padding: 0, marginTop: "1rem" }}>
          <a href={detailsLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              disableElevation
              disableRipple
              size="small"
              color={isPrivate ? "warning" : "primary"}
            >
              {isPrivate ? "Repository is private" : "More Details"}
            </Button>
          </a>
        </CardActions>
      )}
    </CardContent>
  </Card>  
  );
};

export default ProjectsCard;
