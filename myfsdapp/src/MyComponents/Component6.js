import React from 'react';

function Component6(props) {
    return (
        <div>
            {/* Tabs  */}
            <section className = "bg-light">
                <div className = "container my-5 text-start ">
                    <nav>
                        <div className = "nav nav-tabs" id = "nav-tab" role = "tablist">
                            <button className = "nav-link active" id = "nav-home-tab" data-bs-toggle = "tab"
                            data-bs-target = "#nav-home" type = "button" role = "tab" aria-controls = "nav-home"
                            aria-selected = "true">Home</button>

                            <button className = "nav-link" id = "nav-profile-tab" data-bs-toggle = "tab"
                            data-bs-target = "#nav-profile" type = "button" role = "tab" aria-controls = "nav-profile"
                            aria-selected = "false">Profile</button>

                            <button className = "nav-link" id = "nav-contact-tab" data-bs-toggle = "tab"
                            data-bs-target = "#nav-contact" type = "button" role = "tab" aria-controls = "nav-contact"
                            aria-selected = "false">Contact</button>
                        </div>
                    </nav>
                    <div className = "tab-content">
                        <div className = "tab-pane fade show active p-3" id = "nav-home" role = "tabpanel"
                        aria-labelledby="nav-home-tab">
                            <h4>Home Here</h4>
                            <p>
                                This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                his is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                This is a Dummy text. This is a Dummy text.
                            </p>
                        </div>

                        <div className = "tab-pane fade p-3" id = "nav-profile" role = "tabpanel"
                        aria-labelledby="nav-profile-tab">
                            <h4>Profile Here</h4>
                            <p>
                                This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                his is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                This is a Dummy text. This is a Dummy text.
                            </p>
                        </div>

                        <div className = "tab-pane fade p-3" id = "nav-contact" role = "tabpanel"
                        aria-labelledby="nav-contact-tab">
                            <h4>Contact Here</h4>
                            <p>
                                This is a Dummy text This is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                his is a Dummy text. This is a Dummy text. This is a Dummy text. 
                                This is a Dummy text. This is a Dummy text.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Component6;