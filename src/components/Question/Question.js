import React from 'react';

const Question = () => {
    return (
        <div>
            <h2 class="text-center my-5">Frequently Asked Questions</h2>
            <div class="row g-2">
                <div class="accordion col-sm-12 col-md-12 col-lg-12" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                How does React works?
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                React is a library of JavaScript. React create virtual DOM of menipulate codes.  This is the syntax of React components used to describe UI structures. React complied the code using Babel. This is data that comes from somewhere and is rendered by the component.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Difference between props and state.
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Props cannot be changed, only read. State will be changed. Props use for send data to child components. They should not be modified in any way. If you need to modify some value in response to user input or a network response, use state instead. Props changed by parent Component, but state is not changed by parent Component. Props should not change inside Component, state change inside Component.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How does useState works?
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                Returns a stateful value, and a function to update it. During the initial render, the returned state is the same as the value passed as the first argument. The setState function is used to update the state. It accepts a new state value and enqueues a re-render of the component.

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;