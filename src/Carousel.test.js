import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";

it("works when you click on the right arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
});


it("works when you click on the left arrow", function () {
  const { queryByTestId, queryByAltText } = render(<Carousel />);

  // move forward in the carousel
  const rightArrow = queryByTestId("right-arrow");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).not.toBeInTheDocument();

  // move backward in the carousel
  const leftArrow = queryByTestId('left-arrow');
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(queryByAltText("Photo by Richard Pasquarella on Unsplash")).toBeInTheDocument();
  expect(queryByAltText("Photo by Pratik Patel on Unsplash")).not.toBeInTheDocument();
});

it('should hide the arrow buttons when necessary', function () {
  const { queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId('right-arrow');
  const leftArrow = queryByTestId('left-arrow');
  expect(leftArrow).toHaveClass('Carousel-hidden');
  expect(rightArrow).not.toHaveClass('Carousel-hidden');
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(rightArrow).toHaveClass('Carousel-hidden');
  expect(leftArrow).not.toHaveClass('Carousel-hidden');
})


it('renders without crashing', function () {
  render(<Carousel />);
});

it('matches snapshot', function () {
  const { asFragment } = render(<Carousel />);
  expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot', function () {
  const { asFragment, queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId('right-arrow');
  fireEvent.click(rightArrow);
  expect(asFragment()).toMatchSnapshot();
});

it('matches snapshot', function () {
  const { asFragment, queryByTestId } = render(<Carousel />);
  const rightArrow = queryByTestId('right-arrow');
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);
  expect(asFragment()).toMatchSnapshot();
});