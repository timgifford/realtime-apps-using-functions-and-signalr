import React from "react";
import {createStyles, withStyles, WithStyles} from "@material-ui/core";
import {SlideTitle} from "./common/SlideTitle";
import {BulletList} from "./common/BulletList";
import {BulletListItem} from "./common/BulletListItem";

interface Props extends WithStyles<typeof styles> {

}

function AgendaSlideComponent({classes}: Props) {
    return (
        <div className={classes.root}>
            <SlideTitle title={'Agenda'}/>
            <div className={classes.list}>
                <BulletList>
                    <BulletListItem text={'Definition'} />
                    <BulletListItem text={'Why should you care?'}/>
                    <BulletListItem text={'What is Azure Functions?'}/>
                    <BulletListItem text={'What is Azure SignalR?'}/>
                    <BulletListItem text={'What is Terraform?'}/>
                    <BulletListItem text={'What is GitHub Actions?'}/>
                    <BulletListItem text={'Code'}/>
                    <BulletListItem text={'Questions'}/>
                    <BulletListItem text={'Feedback'}/>
                    <BulletListItem text={'Thank you'}/>
                </BulletList>
            </div>
        </div>
    );
}

const styles = createStyles({
    root: {
        gridTemplateRows: '48px auto auto'
    },
    title: {},
    list: {}
});

export const AgendaSlide = withStyles(styles)(AgendaSlideComponent);
