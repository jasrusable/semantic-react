import React, { Component } from 'react';
import { Segment, Header, Content, Button, Icon, Label } from '../../components/elements';
import { ModalBody, Modal, Dimmer, Actions, Progress } from '../../components/modules';
import OutsideClick from 'react-outsideclickhandler';

export class ModalDoc extends Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false
        };

        this.progress = 30;
    }

    onModalOpen(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: true
        });
    }

    onModalClose(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();

        this.setState({
            active: false
        });
    }

    onComplete(state) {
        if (state !== this.state.active) {
            this.setState({
                active: state
            });
        }
    }

    onProgress() {
        this.progress += 5;
        this.forceUpdate();
    }

    onProgress2() {
        this.progress -= 30;
        this.forceUpdate();
    }

    render() {

        return (
            <Segment
                basic
            >
                <Header
                    dividing
                    component="h1"
                >
                    Types
                </Header>

                <Button onClick={this.onModalOpen.bind(this)}>Modal</Button>
                <Modal active={this.state.active} onComplete={this.onComplete.bind(this)} size="large">
                    <Header aligned="center">
                        <Icon name="archive"/>
                        <Content>
                            Archive Old Messages
                        </Content>
                    </Header>
                    <Actions>
                        <Button positive>Ok</Button>
                        <Button negative>No</Button>
                    </Actions>
                </Modal>

                <Button onClick={this.onProgress.bind(this)}>Increase</Button>
                <Button onClick={this.onProgress2.bind(this)}>Decrease</Button>
                <Segment>
                    <Progress progress={this.progress} active indicating showPercentage>
                        <Label>test</Label>
                    </Progress>
                </Segment>
            </Segment>
        );
    }
}

/*
<Dimmer active={this.state.active} page>
    <OutsideClick
        onOutsideClick={this.onDocumentClick.bind(this)}
    >
        <ModalBody
            animate={this.state.active}
            active={this.state.visible}
            start={this.animation.enter}
            end={this.animation.leave}
            onComplete={this.onComplete.bind(this)}
        >
            <Header aligned="center">
                <Icon name="archive"/>
                <Content>
                    Archive Old Messages
                </Content>
            </Header>
            <Actions>
                <Button positive onClick={this.onButtonClick.bind(this)}>Ok</Button>
                <Button negative onClick={this.onButtonClick.bind(this)}>No</Button>
            </Actions>
        </ModalBody>
    </OutsideClick>
</Dimmer>
*/