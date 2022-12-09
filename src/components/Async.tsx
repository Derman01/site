import React from "react";

interface Template {
    library: string;
    component: string;
}

interface IAsync {
    template: Template
}

export default class Async extends React.Component<IAsync> {
    state = {Component: <div>Loading</div>}

    componentWillMount() {
        const {template} = this.props;
        import('pages/students').then((library) => {
            this.setState({
                Component: library.View({
                    data: 'Данные'
                })
            });
        });
        //
        // import(`../${template.library}`).then((library) => {
        //     this.setState({
        //         Component: library[template.component]()
        //     });
        // });
    }

    render() {
        return this.state.Component
    }

}