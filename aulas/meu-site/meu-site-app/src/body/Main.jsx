function Main(){
    return(
        <main>
            <p>Main</p>
            <div class="formulario">
                <form action="">
                    <h2>Formulário</h2>
                    <p>Responda esse formulário para receber indicações de acordo com o seu gosto.</p>
                    <h4><label for="nome">Digite o seu nome:</label></h4>
                    <input type="text" name="nome" id="nome" placeholder="Seu nome..." /><br />

                    <h4><label for="nascimento">Digite sua data de nascimento:</label></h4>
                    <input type="date" name="nascimento" id="nascimento" />
                    
                    <h4>Marque seu gênero favorito:</h4>
                    <input type="radio" name="fav1" id="terror" value="terror" />
                    <label for="terror">Terror</label>
                    <input type="radio" name="fav1" id="romance" value="romance" />
                    <label for="romance">Romance</label>
                    <input type="radio" name="fav1" id="fantasia" value="fantasia" />
                    <label for="fantasia">Fantasia</label><br/>

                    
                    <p></p>
                    <input type="submit" name="Submit" id="submit" />
                    <p></p>
                </form>       
            </div>
            
        </main>
    )
}

export default Main;