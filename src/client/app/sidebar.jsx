        <Sidebar.Pushable as={Segment}>

          <Sidebar as={Menu} animation='push' width='thin' visible={!this.props.visible} icon='labeled' vertical inverted>
            <SidebarFilters visible={!this.props.visible} />
          </Sidebar>
          <Sidebar as={Menu} animation='push' width='very thin' visible={this.props.visible} icon='labeled' vertical inverted>
          Filters
            <Icon  link color="green" size ="big" onClick={() => {this.props.toggleVisibility(!this.props.visible)}} name='chevron circle right' />
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <a href="/auth/fitbit"> Trail Connect </a>
              <MapView parks={this.props.parks}/>
              {this.props.parks !== null && <ParkList parks={this.props.parks}/>}
            </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>


        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={!this.props.visible} icon='labeled' vertical inverted>
            <SidebarFilters visible={!this.props.visible} />
          </Sidebar>
          <Sidebar.Pusher>
          <Segment basic>
            <h1> Nimble Newts Project </h1>
            {this.props.parks !== null && <SearchBar parks={this.props.parks}/>}
            <MapView parks={this.props.parks}/>
            <ParkList />
          </Segment> 
          </Sidebar.Pusher>
        </Sidebar.Pushable>


          <Sidebar as={Menu} animation='push' width='thin' visible={false} icon='labeled'>
              <Menu.Item name='home'>
                <List>
                <List.Header>Activities</List.Header>
                  {this.props.updateFiltersSelections.slice(0, 5).map((filter) => <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Activities'}/>)}
                </List>
                <Accordion>
                  <Accordion.Title>
                    <Icon name='dropdown' />
                    See All Activities
                  </Accordion.Title>
                  <Accordion.Content>
                    <List>
                      {this.props.updateFiltersSelections.slice(5, 21).map((filter) => <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} />)}
                    </List>
                  </Accordion.Content>
                </Accordion>
              </Menu.Item>
              <Menu.Item name='gamepad'>
                <List>
                <List.Header>Popularity</List.Header>
                 {this.props.updateFiltersSelections.slice(21, 23).map((filter) => <FilterRow getParks={this.props.getParks} filter={filter} isSelected={filter.isSelected} name={filter.name} key={filter.name} category={'Popularity'}/>)}
                </List>
              </Menu.Item>
              <Menu.Item name='chevron circle left'>
                <Icon link size="massive" onClick={() => {this.props.toggleVisibility(this.props.visible)}} name='chevron circle left' />
              </Menu.Item>
            </Sidebar>