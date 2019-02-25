import React, { Component } from 'react';
import { Card, Image, Button, Header, Icon } from 'semantic-ui-react';
import './style.scss';
import { Link } from 'react-router-dom';
import { AuthConsumer } from '../AuthContext';
export default class Landing extends Component {


  render() {
    return (
      <AuthConsumer>
        {({ setPilih }) => (
          <div>
            <Header as='h1' textAlign='center'>
              Open Tender Ketua Pelaksana Hology 2.0
        </Header>
            <section id="Steps" class="steps-section">
              {/*start timeline*/}
              <h2 class="steps-header">
                Timeline Pendaftaran
        </h2>

              <div class="steps-timeline">

                <div class="steps-one">
                  <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
                  <h3 class="steps-name">
                    25 Februari - 1 Maret 2019
            </h3>
                  <p class="steps-description">
                    Pendaftaran Online
            </p>
                </div>

                <div class="steps-two">
                  <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
                  <h3 class="steps-name">
                  28 Februari - 3 Maret 2019
            </h3>
                  <p class="steps-description">
                    Pengumpulan Power Point
            </p>
                </div>

                <div class="steps-three">
                  <img class="steps-img" src="http://placehold.it/50/3498DB/FFFFFF" alt="" />
                  <h3 class="steps-name">
                    4 - 6 Maret 2019
            </h3>
                  <p class="steps-description">
                    Fit and Proper Test
            </p>
                </div>


              </div>

            </section>
            {/*end timeline*/}
            <div className="ui middle aligned center aligned grid container">
              <Card.Group>
                <Card>
                  <Image src='./img/pk2.png' />
                  <Card.Content>
                    <Card.Header>Hology 2.0</Card.Header>
                    <Card.Meta>2019</Card.Meta>
                    <Card.Description>HOLOGY 2.0 adalah sebuah kegiatan yang menggabungkan konsep festival dan kompetisi Teknologi Informasi dan Komunikasi. </Card.Description>
                  </Card.Content>
                  <Card.Content extra>

                    <Button animated='fade' color="blue" onClick={()=>{
                      setPilih("Hology");
                      this.props.history.replace('/login')
                    }
                    }>
                      <Button.Content visible>Daftar Ketua Pelaksana</Button.Content>
                      <Button.Content hidden>Login</Button.Content>
                    </Button>
                  </Card.Content>

                </Card>
              </Card.Group>
            </div>

          </div>)}
      </AuthConsumer>
    )
  }
}
