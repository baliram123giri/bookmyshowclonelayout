import React from 'react'
import { FilterComp } from '../../Components/Filter/FilterComp';
import { Button } from '../../Components/Buttons/Button';
import { AppliedFilters } from '../../Components/Filter/AppliedFilters';
import { MyCard } from '../../Components/Card/MyCard';
const data = [
  {
    title: "Date",
    buttons: ["Today", "Tomorrow", "This Weekend"],
  },
  {
    title: "Languages",
    buttons: ["English", "Hindi", "Telgu", "Punjabi"],
  },
  {
    title: "Categories",
    buttons: ["Workshop", "Online Streaming Events", "Comedy Shows", "Kids", "Performances", "Music Shows"],
  },
  {
    title: "More Filters",
    buttons: ["Online Streaming", "Fast Filling", "Outdoor Events", "Must Attend", "Unmissable Events", "Kids Activities", "Kids Allowed", "Offers for you"],
  },
  {
    title: "Price",
    buttons: ["Free", "0-500", "501-2000", "Above 2000"],
  },
];

const sportsData = [
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
  {
    name: "Masterclass on Consistent Compounding",
    title1: "Bandra Reclamation: Mumbai",
    title2: "Workshops",
    description: "₹ 1000 onwards",
    src: "Events/et00318203-xvzxvzneyx-portrait.avif",
  },
  {
    name: "Focusing - The First Primary Goal",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00355125-tkflfwazns-portrait.avif",
  },
  {
    name: "BMW Joytown 2024",
    title1: "Mahalaxmi Race Course: Mumbai",
    title2: "Concerts",
    description: "₹ 4999 onwards",
    src: "Events/et00386991-anltfykwss-portrait.avif",
  },
  {
    name: "Exposure Math - Capture Any Photography Genre",
    title1: "Ameenpur Lake: Hyderabad",
    title2: "Education",
    isTitle1Slice: false,
    isNameSlice: false,
    description: "₹ 2500",
    src: "Events/et00357304-bhvgzdypbr-portrait.avif",
  },
];
export const Activites = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row position-relative">
          {/* //left  */}
          <div className="col-12 col-md-3 ps-0 b_sticky">
            <h4>Filters</h4>
            {data.map((value, index) => {
              return (
                <FilterComp
                  key={value.title}
                  buttons={value.buttons}
                  title={value.title}
                />
              );
            })}
            <Button btnType="outline" title={"Browse by venues"} />
          </div>
          <div className="col-12 col-md-9">
            <div>
              <AppliedFilters
                title={"Activities in Selu"}
                buttons={["Workshops", "Online Streaming Events", "Comedy Shows", "Kids", "Performaces", "Music Shows"]}
              />

              <div className="row">
                {sportsData.map(value => <div key={value.movieName} className="col-12 col-sm-6 col-lg-4 col-xl-3 mt-3">
                  <MyCard {...value} />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
