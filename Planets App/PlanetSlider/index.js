
const PlanetsSlider = props => {
  const {planetsList} = props

  return (
    <PlanetsAppContainer data-testid="planets">
      <Heading>PLANETS</Heading>
      <Slider>
        {planetsList.map(eachPlanet => (
          <PlanetItem key={eachPlanet.id} planetDetails={eachPlanet} />
        ))}
      </Slider>
    </PlanetsAppContainer>
  )
}

export default PlanetsSlider
