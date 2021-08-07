import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectTextRow,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import gpsBackground from 'assets/gps-background.jpg';
import gpsBackgroundLarge from 'assets/gps-background-large.jpg';
import gpsBackgroundPlaceholder from 'assets/gps-background-placeholder.jpg';
import gpsApp from 'assets/gps-app.jpg';
import gpsAppLarge from 'assets/gps-app-large.jpg';
import gpsAppPlaceholder from 'assets/gps-app-placeholder.jpg';
import gpsSidebarLayers from 'assets/gps-sidebar-layers.png';
import gpsSidebarLayersLarge from 'assets/gps-sidebar-layers-large.png';
import gpsSidebarLayersPlaceholder from 'assets/gps-sidebar-layers-placeholder.png';
import gpsSidebarAnnotations from 'assets/gps-sidebar-annotations.png';
import gpsSidebarAnnotationsLarge from 'assets/gps-sidebar-annotations-large.png';
import gpsSidebarAnnotationsPlaceholder from 'assets/gps-sidebar-annotations-placeholder.png';
import gpsSlides from 'assets/gps-slides.jpg';
import gpsSlidesLarge from 'assets/gps-slides-large.jpg';
import gpsSlidesPlaceholder from 'assets/gps-slides-placeholder.jpg';
import gpsBackgroundBar from 'assets/gps-background-bar.jpg';
import gpsBackgroundBarLarge from 'assets/gps-background-bar-large.jpg';
import gpsBackgroundBarPlaceholder from 'assets/gps-background-bar-placeholder.jpg';
import gpsAnnotation from 'assets/gps-annotation.png';
import gpsAnnotationLarge from 'assets/gps-annotation-large.png';
import gpsAnnotationPlaceholder from 'assets/gps-annotation-placeholder.png';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'GPS Guided Autonomous Robot';
const description =
  'This project involved designing and developing a GPS guided Autonomous robot.';
const roles = ['Product Research', 'Functional Design', 'Structural Design', 'Development'];

const ProjectGPS = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="gps">
        <ProjectBackground
          srcSet={`${gpsBackground} 1280w, ${gpsBackgroundLarge} 2560w`}
          placeholder={gpsBackgroundPlaceholder}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${gpsApp} 800w, ${gpsAppLarge} 1920w`}
              placeholder={gpsAppPlaceholder}
              alt="The gps web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className="gps__columns">
            <div className="sidebar__images-text">
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on gps. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className="gps__sidebar-images">
              <Image
                className="gps__sidebar-image"
                srcSet={`${gpsSidebarLayers} 300w, ${gpsSidebarLayersLarge} 700w`}
                placeholder={gpsSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className="gps__sidebar-image"
                srcSet={`${gpsSidebarAnnotations} 300w, ${gpsSidebarAnnotationsLarge} 700w`}
                placeholder={gpsSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                A problem we heard about often form users was that it was difficult to
                find images they had previously seen or worked on. To solve this we added
                a new tab that lists all previously annotated slides. In addition, we
                added the ability to favorite slides, so if users find an interesting
                slide they want to annotate later, they can easily save it to their
                account.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${gpsSlides} 800w, ${gpsSlidesLarge} 1440w`}
              placeholder={gpsSlidesPlaceholder}
              alt="The new My Slides tab in gps, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className="gps__grid">
            <div className="gps__grid-image">
              <div className="gps__grid-background">
                <Image
                  srcSet={`${gpsBackgroundBar} 400w, ${gpsBackgroundBarLarge} 898w`}
                  placeholder={gpsBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className="gps__grid-foreground">
                <Image
                  srcSet={`${gpsAnnotation} 440w, ${gpsAnnotationLarge} 880w`}
                  placeholder={gpsAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className="gps__grid-text">
              <ProjectSectionHeading>Meaningful details</ProjectSectionHeading>
              <ProjectSectionText>
                Marking and annotating areas on high resolution biomedical images is the
                core experience of the app, and it was easy to get lost or lose sense of
                scale when zooming in on details. Adding measurements for the perimeter
                and area of an annotation both helped to communicate the overall scale of
                the image and how large the annotated feature is in comparison.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectGPS;
