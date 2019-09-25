using System.IO;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using MyBlog.Models.Blogging;
namespace MyBlog.Controllers.Blogging 
{
  public class PostParameters {
    public string Id { get; set; }
  }

  [Route("[controller]")]
  public class PostController : Controller 
  {
    [HttpGet("{id}")]
    public void GetPost(long id) {
      System.Console.WriteLine("----- POST ID: " + id);
      StreamWriter writer = new StreamWriter(Response.Body);
      writer.Write(id);
      writer.Close();
    }

    [HttpPost("[action]")]
    public void Add([FromBody]PostParameters post) ///Post/Add
    { 
      // System.Console.WriteLine(post.PostId);
      System.Console.WriteLine("----- POST ID: " + post.Id);
      StreamWriter writer = new StreamWriter(Response.Body);
      writer.Write(post.Id);
      writer.Close();
    }
  }
}