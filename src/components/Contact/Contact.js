import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <div style={{width: '50%', margin: '100px auto', backgroundColor: '#686de0', padding: '30px 50px', borderRadius: '15px'}}>
            <form>
                <div class="mb-3 ">
                    <h2 class='review-style'>Sign Up Now For Big Update</h2> <br />
                    <input type="email" class="form-control w-100px" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Your Email:'/>
                    <br />
                </div>
                <div class="mb-3">
                    
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Your Password:'/>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                    <label class ="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default Contact;