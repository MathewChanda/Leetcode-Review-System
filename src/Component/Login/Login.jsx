import React from 'react'; 
import {Button,Flex,Heading,Input} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'


function Login(){
    const history = useHistory();
    return(
        <div>
            <Flex height="100vh" alignItems="center" justifyContent = "center">
                <Flex direction="column" background="gray.100" p={12} rounder={6}>
                    <Heading mb={6}>Login</Heading>
                    <Input placeholder="Email" variant="field" mb={3} type="email"/>
                    <Input placeholder="Password" variant="field" mb={6} type="password"/>
                    <Button colorScheme="teal" onClick={() => {
                        history.push("/#/lc-not-avalilable");
                        console.log("pushed");}
                    }> Log in</Button>
                </Flex>
            </Flex>
        </div>
    )
}

export default Login; 