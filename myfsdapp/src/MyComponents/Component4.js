import React, { Component } from 'react';

class Component4 extends Component {
    render() {
        return (
            <div>
                {/* Container will have the differnt-differnt widths for diff-diff screens */}
                <div class = "container my-3">
                    <h2>Sample Heading inside the container</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

                {/* Fluid container will have the width at 100% in all the screns */}
                <div class = "container-fluid my-3">
                    <h2>Sample Heading inside the container</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

                {/* We can have customized containers also, this will have the width at 100% before the large screens and will act as regular contianer after large screen
                i.e. will have the fix margin after the large screen.*/}
                <div class = "container-lg my-3">
                    <h2>Sample Heading inside the container</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

                {/* This will have the width at 100% before the extra-large screens and will act as regular contianer after x-large screen
                i.e. will have the fix margin after the x-large screen.*/}
                <div class = "container-xl my-3">
                    <h2>Sample Heading inside the container</h2>
                    <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, 
                        making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
                        the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) 
                        by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, 
                        "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </p>
                </div>

            </div>
        );
    }
}

export default Component4;