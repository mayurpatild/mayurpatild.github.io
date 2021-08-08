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
import obdSlides from 'assets/obd-slides.png';
import obdSlidesLarge from 'assets/obd-slides-large.png';
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
              <ProjectSectionHeading>What is OBD-II ?</ProjectSectionHeading>
              <ProjectSectionText>
              OBD-II is an enhanced diagnostic monitor, built right into the vehicle. 
              It's designed to alert the driver when emission levels are greater than 1.5 times the emission 
              levels for the car as it was originally certified by the EPA (Environmental Protection Agency). 
              OBD stands for On Board Diagnostics and the II added to the OBD (On Board Diagnostics) name 
              represents that it is the second generation, the successor to the OBD I system used on EPA-certified 
              cars starting in 1988. Unlike OBD-I, OBD-II is designed to detect electrical, chemical and mechanical 
              failures in the vehicle emission control system that might affect the vehicle emission levels. 
              The OBD-II protocol is rather simple in theory, but in practice manufacturer-specific additions 
              and omissions from the official specification make communication more difficult. 
              To communicate with the ECU, OBD-II Parameter IDs (PIDs) are sent, 
              and the ECU responds with anywhere from one to twenty bytes. 
              PIDs are grouped into modes which range from Mode 01 to Mode 09. 
              The mode my project is particularly concerned with is Mode 01, because that mode provides real-time data. 
              Other modes, such as Mode 03, provide Diagnostic Trouble Codes (DTCs) and general information 
              like the Vehicle Identification Number.
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
              <ProjectSectionHeading>Objectives</ProjectSectionHeading>
              <ProjectSectionText>
              OBD-II Port is used for On Board Diagnostics of the vehicle. This helps to alert the driver 
              about the emission control of the vehicle. This port can as well be used to check various 
              other parameters such as vehicle speed, engine rpm, engine run time, throttle position, 
              engine coolant temperature, engine coolant level, trouble codes, fuel type etc. 
              This can help to monitor the mileage and fuel consumption of a common user and can also 
              be used to monitor the driving habits of a driver as to identify whether he is over-speeding. 

              This feature is very much useful for parents to keep a track of their children's driving habits.

              
              The RAW data is decoded in order to obtain the actual values of the selected
              parameters for the vehicle. The Android OBD-II Reader Android Application is 
              used to display the values logged in real time for the system.

               Objectives: 
               1) Write a Python program that runs on the Raspberry Pi to establish connection with Bluetooth OBD-II scanner
                and record various parameters to SD-card.
               2) Write a Python program that exposes the collected data through an API and displays it on the GUI of the 
               Raspberry Pi.
               3) Using Android SDK, develop an android application capable of data logging through the Bluetooth OBD-II scanner.
               
               
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
               OBD-II analytics can be very helpful in monitoring driving habits. Consider a device that allows 
              parents to monitor their children's driving to teach them about safety and proper driving techniques. 
              This kind of device would reduce accident rates and create better drivers. 

               Progressive Insurance has a device called Snapshot which analyses driving habits and rewards good driving
              with up to a 30% discount. This device plugs into the OBD-II port and uses the real-time PIDs to read data, 
              much like this project.

               OBD-II analytics can also be used for data mining and targeted advertisement. One example of how vehicle 
              analytics could be used in this manner is automatically advertising repair services when the "check engine"
              light turns on. Agnik, LLC, a company that specializes in mobile and distributed data mining software, has 
              a patent on "On board vehicle data mining, social networking, and pattern-based advertisement (US 20110258044 A1])."

               While designing the project, in the Android Application only the 3 parameters (maximum vehicle speed, engine runtime 
              and maximum engine rpm) were only taken into consideration for data logging else, real time data was acquired and 
              displayed on the Graphical User Interface of the Android OBD-II Reader Android Application.

               The OBD sensors supported by the vehicle varied from model to model of the vehicles. Unfortunately, the older car 
              was used for testing initially and did not support reporting fuel level over OBD-II, but in newer cars this 
              functionality is more prevalent. This kind of analytics would probably benefit consumers the most because it 
              would allow one to identify what kinds of driving habits minimize fuel consumption. Not only would it save a 
              few Dollars at the gas station, it would also help to reduce global pollution.

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
