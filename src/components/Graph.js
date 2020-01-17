import React from "react";
import { ResponsiveBar } from "@nivo/bar";
import PropTypes from "prop-types";
import styled from "styled-components";
import tx from "tailwind.macro";

const GraphWrapper = styled.div`
  ${tx`w-full`};
  height: 500px;
`;

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
    <GraphWrapper>
      <ResponsiveBar
        data={graphData}
        indexBy="gender"
        keys={["number"]}
        margin={{ top: 10, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={["#4FD1C5", "#FC8181"]}
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
          legend: "Number of Users",
          legendPosition: "middle",
          legendOffset: -40
        }}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "indexes",
            anchor: "top-right",
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
    </GraphWrapper>
  );
};

Graph.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      gender: PropTypes.string.isRequired,
      age: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default Graph;
