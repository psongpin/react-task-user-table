import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const Graph = ({ data }) => {
  const numberOfMaleUsers = data.filter(user => user.gender === "male").length;
  const numberOfFemaleUsers = data.filter(user => user.gender === "female")
    .length;

  const graphData = [
    { gender: "Male", number: numberOfMaleUsers },
    { gender: "Female", number: numberOfFemaleUsers }
  ];

  const theme = {
    axis: {
      ticks: {
        line: {
          stroke: "#ddd",
          strokeWidth: 1
        },
        text: {
          fill: "#ddd"
        }
      },
      legend: {
        text: {
          fill: "#ddd",
          fontSize: 14
        }
      }
    }
  };

  return (
    <div style={{ height: 600, width: 720 }}>
      <ResponsiveBar
        data={graphData}
        indexBy="gender"
        keys={["number"]}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={["#FC8181", "#4FD1C5"]}
        colorBy="index"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Gender",
          legendPosition: "middle",
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Number",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "indexes",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 5,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            itemTextColor: "#ddd",
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
        animate={true}
        motionStiffness={300}
        motionDamping={40}
        theme={theme}
      />
    </div>
  );
};

export default Graph;
