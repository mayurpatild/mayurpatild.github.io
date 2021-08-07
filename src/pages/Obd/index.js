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
import obdBackground from 'assets/obd-background.jpg';
import obdBackgroundLarge from 'assets/obd-background-large.jpg';
import obdBackgroundPlaceholder from 'assets/obd-background-placeholder.jpg';
import obdApp from 'assets/obd-app.jpg';
import obdAppLarge from 'assets/obd-app-large.jpg';
import obdAppPlaceholder from 'assets/obd-app-placeholder.jpg';
import obdSidebarLayers from 'assets/obd-sidebar-layers.png';
import obdSidebarLayersLarge from 'assets/obd-sidebar-layers-large.png';
import obdSidebarLayersPlaceholder from 'assets/obd-sidebar-layers-placeholder.png';
import obdSidebarAnnotations from 'assets/obd-sidebar-annotations.png';
import obdSidebarAnnotationsLarge from 'assets/obd-sidebar-annotations-large.png';
import obdSidebarAnnotationsPlaceholder from 'assets/obd-sidebar-annotations-placeholder.png';
import obdSlides from 'assets/obd-slides.jpg';
import obdSlidesLarge from 'assets/obd-slides-large.jpg';
import obdSlidesPlaceholder from 'assets/obd-slides-placeholder.jpg';
import obdBackgroundBar from 'assets/obd-background-bar.jpg';
import obdBackgroundBarLarge from 'assets/obd-background-bar-large.jpg';
import obdBackgroundBarPlaceholder from 'assets/obd-background-bar-placeholder.jpg';
import obdAnnotation from 'assets/obd-annotation.png';
import obdAnnotationLarge from 'assets/obd-annotation-large.png';
import obdAnnotationPlaceholder from 'assets/obd-annotation-placeholder.png';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'OBD-2 based Vehicle Data logger';
const description =
  'Designing a platform to help consumers analyze and track their vehicle stats and driving dynamics.';
const roles = ['Product Research', 'Design', 'Design', 'Development'];

const ProjectOBD = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="obd">
        <ProjectBackground
          srcSet={`${obdBackground} 1280w, ${obdBackgroundLarge} 2560w`}
          placeholder={obdBackgroundPlaceholder}
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
              srcSet={`${obdApp} 800w, ${obdAppLarge} 1920w`}
              placeholder={obdAppPlaceholder}
              alt="The obd web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className="obd__columns">
            <div className="sidebar__images-text">
              <ProjectSectionHeading>Bringing it together</ProjectSectionHeading>
              <ProjectSectionText>
                Teachers needed a better way to create collaborative group activities by
                annotating slides on obd. Before starting this project, a layer could
                only be annotated by a single user, making it difficult for learners to
                work together.
              </ProjectSectionText>
              <ProjectSectionText>
                Our solution was to allow users to be invited to a layer, where they can
                see others’ annotations and make their own.
              </ProjectSectionText>
            </div>
            <div className="obd__sidebar-images">
              <Image
                className="obd__sidebar-image"
                srcSet={`${obdSidebarLayers} 300w, ${obdSidebarLayersLarge} 700w`}
                placeholder={obdSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className="obd__sidebar-image"
                srcSet={`${obdSidebarAnnotations} 300w, ${obdSidebarAnnotationsLarge} 700w`}
                placeholder={obdSidebarAnnotationsPlaceholder}
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
              srcSet={`${obdSlides} 800w, ${obdSlidesLarge} 1440w`}
              placeholder={obdSlidesPlaceholder}
              alt="The new My Slides tab in obd, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className="obd__grid">
            <div className="obd__grid-image">
              <div className="obd__grid-background">
                <Image
                  srcSet={`${obdBackgroundBar} 400w, ${obdBackgroundBarLarge} 898w`}
                  placeholder={obdBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className="obd__grid-foreground">
                <Image
                  srcSet={`${obdAnnotation} 440w, ${obdAnnotationLarge} 880w`}
                  placeholder={obdAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className="obd__grid-text">
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

export default ProjectOBD;
