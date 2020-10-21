import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'


const CharacterGrid = ({items, isLoading}) => {
    return isLoading ? (
   <Spinner/>
    
    
    ): (
    <>
    
        <Divider horizontal>
        <Header as='h4'>
        <Icon name="lock"/>
          LOCKDOWN
        </Header>
      </Divider>
  
  
  
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='bar chart' />
          CHECKER
        </Header>
      </Divider>
  
      <Table definition>
        <Table.Body>
          <Table.Row>
            <Table.Cell width={2}>Name of the administrative district	</Table.Cell>
            <Table.Cell>{items.admindistrictname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Name of the local council authority	</Table.Cell>
            <Table.Cell>{items.councilname}</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Indicates the current status of the area as provided by the UK government	</Table.Cell>
            <Table.Cell>{items.lockdownstatus}</Table.Cell>
          </Table.Row>

        </Table.Body>
      </Table>
      </>
    )
}



export default CharacterGrid